const express = require("express");
const Users = require('B:/School_News_Site_project/Server/src/models/sign-up')
const mongoose = require("mongoose");
const path = require("path")
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

// app.use(session({ secret: config }));
// connecion with mongodb
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/anonymous_db", {
  useNewUrlParser: true,
});
let conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("disconnected", function () {
  console.log("database is disconnected successfully");
});
conn.on("error", console.error.bind(console, "connection error:"));
console.log("localhoat:8000");

app.listen(port, () => {
  console.log("Server started at port: " + port);
});

// for sign-up
// app.get("/", (req, res) => {
//   res.redirect("http://127.0.0.1:3000/")
// });

app.post('/post/:slug',(req, res) => {
  res.send("Hello, This is the " + req.params.slug)
});
app.post("/sign-up", async (req, res) => {
  console.log("Request Catched")
  let username = req.body.username;
  let email = req.body.email;
  let pass = req.body.password;
  let class_ = req.body.class_;
  let school_name = req.body.scl_name;
  let User_email = await Users.findOne({ email: email });
  let $username = await Users.findOne({ username: username });
  if ($username != null || User_email != null){
    res.send("reserved_usename");
  } else {
    const User = new Users({
    //   Name: req.body.Name,
    //   password: pass,
    //   Email: Email,
    //   Earning: 0,
      email: email,
      username: username,
      password:pass,
      school_name: school_name,
      std_class: class_

    });

    const registered = await User.save();
    console.log(registered)
    // console.log(typeof age , typeof gender)
    // req.session.user_id = username;
    res.redirect("http://127.0.0.1:3000/sign-in")
    // res.redirect(`/Dashboard/${username}`);
  }
});
