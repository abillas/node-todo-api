//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to coonect");
  }
  console.log("Connected to MongoDB Server");
  const db = client.db("TodoApp");

  //   db.collection("Todos").insertOne(
  //     {
  //       text: "SOmething to do",
  //       completed: false
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log("Unable to coonect", err);
  //       }
  //       console.log(JSON.stringify(result.ops, undefined, 2));
  //     }
  //   );

  //   db.collection("Users").insertOne(
  //     {
  //       name: "Agjelos",
  //       age: 20,
  //       location: "Tirana"
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log("Unable to coonect", err);
  //       }
  //       console.log(JSON.stringify(result.ops, undefined, 2));
  //     }
  //   );

  client.close();
});
