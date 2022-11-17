import {
  getFirestore,
  collection,
  setDoc,
  doc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";

import app from "./firebase";

const db = getFirestore(app);

export const getColRef = (colName) => {
  return collection(db, colName);
};

export const pushDoc = async (collectionName, docInfo) => {
  const docRef = doc(db, collectionName, docInfo.id);
  await setDoc(docRef, docInfo);
};

export const delDoc = async (collectionName, docId) => {
  const docRef = doc(db, collectionName, docId);
  const res = await deleteDoc(docRef);
  console.log(res);
};

export { onSnapshot };
