const { SHA256 } = require("crypto-js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

var password = "123abc!";

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword =
  "$2a$10$fXKzwttrSAPVCEqCxE6QK.D//riG/J7bZOXQlw0uMZT77GR9UQ8N.";

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// var data = { id: 4 };

// var token = jwt.sign(data, "123abc");
// console.log(token);

// var decode = jwt.verify(token, "123abc");
// console.log(decode);

// var mes = "I am a simple user ";
// var hash = SHA256(mes).toString();

// console.log(mes);
// console.log(hash);

// var data = { id: 4 };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + "somesecret").toString()
// };

// var resultHash = SHA256(JSON.stringify(token.data) + "somesecret").toString();

// if (resultHash === token.hash) {
//   console.log("Data OK");
// } else {
//   console.log("data was changed");
// }
