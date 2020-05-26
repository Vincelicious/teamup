import { db } from "../db";

export default {
  getUsers() {
    return db
      .collection("users")
      .get()
      .then(querySnapshot => {
        return querySnapshot.docs.map(doc => {
          return { ...{ id: doc.id }, ...doc.data() };
        });
      });
  }
};
