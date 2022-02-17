import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';

import { storage } from '../firebase';
/**
 *
 * @StoreImage
 * @GetImage
 * @DeleteImage
 */

/**
 *
 * @param {Object} params
 */
// async function StoreImage(params) {
  
//   return uploadTask;
//   // Listen for state changes, errors, and completion of the upload.
// }

/**
 *
 * @param {Object} params
 */
async function DeleteImage(params) {
  // @file name of the file to be deleted
  const desertRef = ref(storage, params.file);

  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      console.log('file deleted');
    })
    .catch((error) => {
      console.log(error);
    });
}

/**
 * Export these functions
 */
export {  DeleteImage };
