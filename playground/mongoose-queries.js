const { ObjectID } = require("mongodb");

var { mongoose } = require("./../server/db/mongoose");
var { Todo } = require("./../server/models/todo");
var { User } = require("./../server/models/user");

// var id = "5c58241b18448c0480c3d2f811";

// if (!ObjectID.isValid(id)) {
//   console.log("ID not valid");
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("Id not found");
//     }
//     console.log("Todo By id", todo);
//   })
//   .catch(e => console.log(e));

User.findById("5c582bb53b77ac0d24a0d3d6")
  .then(user => {
    if (!user) {
      return console.log("Id not found");
    }
    console.log("User is", user);
  })
  .catch(e => console.log(e));
