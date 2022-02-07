import { db } from "../firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

async function getData(params) {
  const response = [];
  const querySnapshot = await getDocs(collection(db, params.collection));
  querySnapshot.forEach((doc) => {
    response.push(doc.data());
  });
  return response;
}
async function setData(params) {
  try {
    const ref = collection(db, params.collection);
    await setDoc(doc(ref, params.id), params.data);
  } catch (e) {
    console.error("Error adding document: ", e);
    return { Status: "Error", Message: "Error Occurred" };
  }
  return { Status: "Success", Message: "Added SuccessFully" };
}
async function setCollectionData(params) {
  try {
    const ref = collection(db, params.collection, params.id, params.name);
    await setDoc(doc(ref), params.data);
  } catch (e) {
    console.error("Error adding document: ", e);
    return { Status: "Error", Message: "Error Occurred" };
  }
  return { Status: "Success", Message: "Added SuccessFully" };
}

export { getData, setData, setCollectionData };
