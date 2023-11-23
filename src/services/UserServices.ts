import firebase from "../config/firebase";
import { LoginValues, RegisterValues } from "../interfaces/interfaces";

export const createUser = async (formValues: RegisterValues) => {
  const response = await firebase
    .auth()
    .createUserWithEmailAndPassword(formValues.email, formValues.password);
  if (response.user) {
    await firebase.firestore().collection("users").add({
      fullName: formValues.fullName,
      email: formValues.email,
      userId: response.user.uid,
    });
    return response.user.uid;
  }
};

export const login = async (formValues: LoginValues) => {
  const response = await firebase
    .auth()
    .signInWithEmailAndPassword(formValues.email, formValues.password);
  if (response.user) {
    return response.user.uid;
  }
};

export const saveUIDToLocalStorage = (uid: string) => {
  localStorage.setItem("token", uid);
};

export const getUserData = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const userDoc = await firebase
      .firestore()
      .collection("users")
      .doc(token)
      .get();
    if (userDoc.exists) {
      return userDoc.data();
    }
  }
};
