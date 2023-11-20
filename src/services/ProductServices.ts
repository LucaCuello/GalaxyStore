import firebase from "../config/firebase";

export const getProducts = () => {
    return firebase.firestore().collection("products").get();
  };