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
  },
  async createGroups() {
    // Clear old groups
    await this.getGroups().then(response => {
      response.forEach(group => {
        db.collection("groups")
          .doc(group.id)
          .delete();
      });
    });

    let newGroups = [
      {
        marathonId: "",
        name: "House Stark",
        description: "Winter is coming",
        image: "",
        trainingDays: ["tu", "fr"],
        trainingLocation: "",
        members: [],
        maxMembers: 8,
        achievements: []
      },
      {
        marathonId: "",
        name: "House Lannister",
        description: "A Lannister always pays his debts",
        image: "",
        trainingDays: ["we", "sa"],
        trainingLocation: "",
        members: [],
        maxMembers: 5,
        achievements: []
      }
    ];

    newGroups.forEach(group => {
      db.collection("groups").add(group);
    });
  }
};
