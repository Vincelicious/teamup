import { db } from "/db";

let achievement = {
  name: "Total Trainings",
  description: "Your total number of trainings.",
  image: "wireframebadge.svg",
  goal: 1,
  type: "trainings",
  level: 1,
  createdAt: 1452488445471,
  updatedAt: 1452488449471
};

db.collection("achievements").add(achievement);
