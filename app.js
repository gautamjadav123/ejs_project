const express = require("express");
const bodyparser = require("body-parser");
// const date = require(__dirname + "/date.js");
const date = require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = ["Buy Food", "Cock Food", "Eat Food"];
let workitems = [];

app.get("/", function (req, res) {
  // res.send("hello this is gautm jadav");
  // var currentday = today.getDay();
  // var day = "";

  // if (currentday === 6 || currentday === 0) {
  //     day = "weekend";
  //     // res.send("<h1>yeh it's the weekend!</h1>")
  // }
  // else{
  //     day =  "weekday";
  //     // res.send("<h1>Boo! I have to work.</h1>")
  // }

  // switch (currentday) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;

  //   default:
  //       console.log("error: the current day is equal to "+ currentday);
  //     break;
  // }

  let day = date.getdate();

  res.render("List", {
    listTitle: day,
    newlistitems: items,
  });
});


app.post("/", function (req, res) {
  console.log(req.body);
  let item = req.body.newitem;


  if (req.body.list === "work") {
    workitems.push(item);

    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
})


app.get("/work", function(req,res){
  res.render("list",{listTitle : "work list", newlistitems: workitems})
})

app.get("/about", function(req,res){
  res.render("about")

})



app.listen(3000, function (req, res) {
  console.log("server is running on port 3000");
});
