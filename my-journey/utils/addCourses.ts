// utils/seedCourses.ts
import { addCourse } from './courseService';

export const seedInitialCourses = async () => {
  const initialCourses = [
    {
      name: 'Web Development Bootcamp',
      image: 'https://example.com/web-dev.jpg',
      price: 299.99,
      status: 'available'
    },
    {
      name: 'Data Science Masterclass',
      image: 'https://example.com/data-science.jpg',
      price: 399.99,
      status: 'available'
    },
    // Add more courses as needed
  ];

  for (const course of initialCourses) {
    await addCourse(course as Course);
  }
};
