// services/courseService.ts
import { ref, push, set, onValue, update , serverTimestamp } from "firebase/database";
import { database } from "../firebaseConfig";
import { Course } from "../model/Course";
import { PaymentDetails } from '../model/PaymentDetails';

export const addCourse = async (courseData: Course) => {
  try {
    const coursesRef = ref(database, 'courses');
    const newCourseRef = push(coursesRef);
    await set(newCourseRef, courseData);
    return newCourseRef.key;
  } catch (error) {
    console.error("Error adding course:", error);
    throw error;
  }
};

export const fetchCourses = (callback: (courses: Course[]) => void) => {
  const coursesRef = ref(database, 'courses');
  try {
    onValue(coursesRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("Fetched Data from Firebase:", data); // Debugging log
        const coursesList: Course[] = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        console.log("Formatted Courses List:", coursesList); // Debugging log
        callback(coursesList);
      } else {
        console.warn("No courses found in database.");
        callback([]);
      }
    }, (error) => {
      console.error("Error fetching courses from Firebase:", error);
      callback([]);
    });
  } catch (error) {
    console.error("Unexpected error in fetchCourses:", error);
  }
};


export const processCoursePurchase = async (
  courseId: string, 
  userId: string,
  paymentDetails: PaymentDetails
) => {
  try {
      const paymentResult = await processPayment(paymentDetails);

      if (paymentResult.status === 'success') {
          const courseRef = ref(database, `courses/${courseId}`);
          const userCourseRef = ref(database, `userCourses/${userId}/${courseId}`);

          await update(courseRef, { 
              status: 'booked',
              lastBookedBy: userId 
          });

          await set(userCourseRef, {
              courseId,
              status: 'booked',
              paymentId: paymentResult.paymentId,
              bookedAt: serverTimestamp(),
              amount: paymentDetails.amount
          });

          return { 
              success: true, 
              message: 'Course purchased successfully',
              paymentId: paymentResult.paymentId
          };
      } else {
          throw new Error('Payment failed');
      }
  } catch (error) {
      console.error("Error processing course purchase:", error);
      throw error;
  }
};

const processPayment = async (paymentDetails: PaymentDetails): Promise<{status: string, paymentId: string}> => {
  // Implement actual payment gateway integration
  return {
      status: 'success',
      paymentId: `payment_${Date.now()}`
  };
};

