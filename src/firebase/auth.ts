import { auth } from "./firebase";
import firebase from "firebase";

// Sign Up
export const doCreateUserWithEmailAndPassword = (
  email: string,
  password: string
) => auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email: string, password: string) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () => auth.signOut();

// Password Reset
export const doPasswordReset = (email: string) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = async (password: string) => {
  if (auth.currentUser) {
    await auth.currentUser.updatePassword(password);
  }
  throw Error("No auth.currentUser!");
};

var provider = new firebase.auth.GoogleAuthProvider();

export const loginWithGoogle = () =>
  auth
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      // // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = credential.accessToken;
      // // The signed-in user info.
      // var user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // // The email of the user's account used.
      // var email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
