import { db } from "../firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

/**
 *
 * @getData - fetch data from fireStore database
 * @setData - set data to fireStore database
 * @addDoc - set data to fireStore database
 * @deleteData - delete data from fireStore database
 */

/**
 *
 * @param {*} params
 * @returns
 */
async function getData(params) {
  const response = [];
  const querySnapshot = await getDocs(collection(db, params.collection));
  querySnapshot.forEach((doc) => {
    response.push(doc.data());
  });
  return response;
}
/**
 *
 * @param {*} params
 * @returns
 */
async function setData(params) {
  try {
    await setDoc(doc(db, params.collection), params.data);
  } catch (e) {
    console.error("Error adding document: ", e);
    return { Status: "Error", Message: "Error Occurred" };
  }
  return { Status: "Success", Message: "Added SuccessFully" };
}

/**
 *
 * @param {*} params
 * @returns
 */
async function addDoc(params) {
  const ref = doc(collection(db, params.collection));
  // Add a new document with a generated id.
  await setDoc(ref, params.data);
  console.log("Document written with ID: ", ref.id);
  params.data.boardId = ref.id;
  return params.data;
}

/**
 *
 * @param {*} params
 */
async function deleteDoc(params) {
  await deleteDoc(doc(db, params.collection, params.id));
}

/**
 * export these functions
 */
export { getData, setData, addDoc, deleteDoc };
