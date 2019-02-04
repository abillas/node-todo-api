//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to coonect");
  }
  console.log("Connected to MongoDB Server");
  const db = client.db("TodoApp");

  //   db.collection("Todos")
  //     .find({ completed: false })
  //     .toArray()
  //     .then(
  //       docs => {
  //         console.log("Todos");
  //         console.log(JSON.stringify(docs, undefined, 2));
  //       },
  //       err => {
  //         console.log("Couldnt fetch todos, err");
  //       }
  //     );

  //   db.collection("Todos")
  //     .find()
  //     .toArray()
  //     .then(
  //       count => {
  //         console.log(`Todos count: ${count}`);
  //       },
  //       err => {
  //         console.log("Couldnt fetch todos, err");
  //       }
  //     );

  db.collection("Users")
    .find({ name: "MIke" })
    .toArray()
    .then(docs => {
      console.log(JSON.stringify(docs, undefined, 2));
    });

  //  client.close();
});
