import { db } from "../db";

export default {
  getMarathons() {
    return db
      .collection("marathons")
      .get()
      .then(querySnapshot => {
        return querySnapshot.docs.map(doc => {
          return { ...{ id: doc.id }, ...doc.data() };
        });
      });
  }
};
