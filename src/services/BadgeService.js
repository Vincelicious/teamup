import { db } from "../db";

export default {
  getBadges() {
    return db
      .collection("achievements")
      .get()
      .then(querySnapshot => {
        return querySnapshot.docs.map(doc => {
          console.log(doc.data());
          return { ...{ id: doc.id }, ...doc.data() };
        });
      });
  }
};
