import { db } from '../firebase';
import { collection, getDocs, setDoc, doc, getDoc } from 'firebase/firestore';
import axios from 'axios';

/**
 *
 * @getData - fetch data from fireStore database
 * @setData - set data to fireStore database
 * @addDoc - set data to fireStore database
 * @deleteData - delete data from fireStore database
 */

/**
 *
 * @param {Object} params
 * @returns
 */
async function getSpecificData(params) {
  const querySnapshot = await getDoc(doc(db, params.collection, params.id));
  return querySnapshot.data();
}
/**
 *
 * @param {Object} params
 * @returns
 */
async function getData(params) {
  const response = [];
  const querySnapshot = await getDocs(collection(db, params.collection));
  querySnapshot.forEach((doc) => {
    const mData = doc.data();
    mData.id = doc.id;
    response.push(mData);
  });
  return response;
}
/**
 *
 * @param {Object} params
 * @returns
 */
async function setData(params) {
  try {
    await setDoc(doc(db, params.collection, params.id), params.data);
  } catch (e) {
    console.error('Error adding document: ', e);
    return { Status: 'Error', Message: 'Error Occurred' };
  }
  return { Status: 'Success', Message: 'Added SuccessFully' };
}

/**
 *
 * @param {Object} params
 * @returns
 */
async function addDoc(params) {
  const ref = doc(collection(db, params.collection));
  // Add a new document with a generated id.
  await setDoc(ref, params.data);
  // console.log('Document written with ID: ', ref.id);
  params.data.id = ref.id;
  return params.data;
}

/**
 *
 * @param {Object} params
 */
async function deleteDoc(params) {
  await deleteDoc(doc(db, params.collection, params.id));
}

/**
 * export these functions
 */
export { getData, getSpecificData, setData, addDoc, deleteDoc };
