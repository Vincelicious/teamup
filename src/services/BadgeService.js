import { db } from "../db";

export default {
  getRecordBadges() {
    return db
      .collection("achievements")
      .where("achievementType", "==", "record")
      .get()
      .then(querySnapshot => {
        return querySnapshot.docs.map(doc => {
          console.log(doc.data());
          return { ...{ id: doc.id }, ...doc.data() };
        });
      });
  }
};
