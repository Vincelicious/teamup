import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({ projectId: "team-up-fontys" })
  .firestore();

// Export types that exists in Firestore
const { TimeStamp, GeoPoint } = firebase.firestore;
export { TimeStamp, GeoPoint };
