const express = require("express");

// express App

const app = express();
// Register View Engine
app.set("view engine", "ejs");

// listen for Request

app.listen(3000);

// app.get('/',(req,res)=>{
// res.send('<p>Home Page</p>');
// });

app.get("/", (req, res) => {
  // res.sendFile('./views/index.html',{root:__dirname});
  res.render("index"); // Using ejs
});

app.get("/blog/create", (req, res) => {
    //    
    res.render("create"); // Using ejs
  });

app.get("/about", (req, res) => {
  // res.sendFile('./views/about.html',{root:__dirname});
  res.render("about"); // Using ejs
});

// redirects

app.get("/about-us", (req, res) => {
  //    res.redirect('/about');
  res.render("about"); // Using ejs
});



// 404 Page

app.use((req, res) => {
  // res.sendFile('./views/404.html',{root:__dirname});
  res.status(404).render("404"); // Using ejs
});
