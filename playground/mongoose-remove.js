const { ObjectID } = require("mongodb");

var { mongoose } = require("./../server/db/mongoose");
var { Todo } = require("./../server/models/todo");
var { User } = require("./../server/models/user");

Todo.findByIdAndRemove("5c5ac2f13ec99431f03afc43").then(todo => {
  console.log(todo);
});
