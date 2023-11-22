import firebase from "../config/firebase";
import { FormValues } from "../interfaces/interfaces";

export const createUser = async (formValues: FormValues) => {
  const response = await firebase
    .auth()
    .createUserWithEmailAndPassword(formValues.email, formValues.password);
  if (response.user) {
    await firebase.firestore().collection("users").add({
      fullName: formValues.fullName,
      userId: response.user.uid,
    });
    return response.user.uid;
  }
};
