import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase";
/**
 *
 * @StoreImage
 * @GetImage
 * @DeleteImage
 */

/**
 *
 * @param {*} params
 */
async function StoreImage(params) {
  const metadata = {
    contentType: "image/jpg",
  };

  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, params.file.name);
  const uploadTask = uploadBytesResumable(storageRef, params.file, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      // console.log("Upload is " + progress + "% done");
      console.log(snapshot);
    },
    (error) => {
      console.log(error);
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
      });
    }
  );
}

/**
 *
 * @param {*} params
 */
async function DeleteImage(params) {
  // @file name of the file to be deleted
  const desertRef = ref(storage, params.file);

  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      console.log("file deleted");
    })
    .catch((error) => {
      console.log(error);
    });
}

/**
 * Export these functions
 */
export { StoreImage, DeleteImage };
