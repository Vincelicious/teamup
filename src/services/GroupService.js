import { db } from "../db";

export default {
  getGroups() {
    return db
      .collection("groups")
      .get()
      .then(querySnapshot => {
        return querySnapshot.docs.map(doc => {
          return { ...{ id: doc.id }, ...doc.data() };
        });
      });
  },
  getGroup(id) {
    return db
      .collection("groups")
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          return { ...{ id: doc.id }, ...doc.data() };
        } else {
          console.error("This group doesn't exist");
        }
      });
  },
  createGroup(group) {
    return db.collection("groups").add(group);
  }
};
