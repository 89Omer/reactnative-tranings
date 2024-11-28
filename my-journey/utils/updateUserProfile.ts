import { ref, update } from 'firebase/database';
import { database } from '../firebaseConfig';

export const updateUserProfile = async (userId, additionalData) => {
  try {
    const userRef = ref(database, `users/${userId}`);
    await update(userRef, additionalData);
    console.log('Profile updated successfully!');
  } catch (error) {
    console.error('Error updating profile:', error);
  }
};

