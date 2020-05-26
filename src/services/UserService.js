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
  },
  createUsers() {
    const users = [
      {
        email: "ned@stark.com",
        password: "qwe123",
        firstName: "Ned",
        lastName: "Stark",
        image: "",
        biography: "",
        gender: "male",
        age: 48,
        rememberToken: ""
      },
      {
        email: "sansa@stark.com",
        password: "qwe123",
        firstName: "Sansa",
        lastName: "Stark",
        image: "",
        biography: "",
        gender: "female",
        age: 20,
        rememberToken: ""
      },
      {
        email: "arya@stark.com",
        password: "qwe123",
        firstName: "Arya",
        lastName: "Stark",
        image: "",
        biography: "",
        gender: "female",
        age: 16,
        rememberToken: ""
      },
      {
        email: "catelyn@stark.com",
        password: "qwe123",
        firstName: "Catelyn",
        lastName: "Stark",
        image: "",
        biography: "",
        gender: "female",
        age: 42,
        rememberToken: ""
      }
    ];

    users.forEach(user => {
      db.collection("users").add(user);
    });
  }
};
