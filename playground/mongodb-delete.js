//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to coonect");
  }
  console.log("Connected to MongoDB Server");
  const db = client.db("TodoApp");

  //   db.collection("Todos")
  //     .deleteMany({ text: "eat lunch" })
  //     .then(result => {
  //       console.log(result);
  //     });

  db.collection("Users")
    .findOneAndDelete({ name: "MIke" })
    .then(result => {
      console.log(result);
    });

  //  client.close();
});
