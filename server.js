const http = require("http");

const fs = require("fs");

const _ = require('lodash');

const server = http.createServer((req, res) => {
  //   console.log("Request Made");
  res.setHeader("Content-Type", "text/html"); // set Content-Type
  // res.write("Hello Peeps!!");
// console.log(_.random(10,20));

// const greet = _.once(() =>{
//   console.log("Hi");
// });

// greet();
// greet();
// greet();
  

  let path = "./views/";
  console.log(req.url);

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
        res.statusCode = 301;
     res.setHeader('Location','/about');  // Redirect to about page
     res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // Sending back a login page
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening........");
});
