const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

// here
//your code goes here
app.get("/", (req, res) => {
    res.json("Hello World!");
  });
  
  app.post("/add", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
  
    if (typeof num1 == "string" && typeof num2 == "string") {
      return res.json({
        status: "failure",
        message: "Invalid data types",
      });
    }
    const result = num1 + num2;
    if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
      return res.json({
        status: "error",
        message: "Overflow",
      });
    }
    return res.json({
      status: "success",
      message: "the sum of given two numbers",
      sum: result,
    });
  });
  
  app.post("/sub", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
  
    if (typeof num1 == "string" && typeof num2 == "string") {
      return res.json({
        status: "failure",
        message: "Invalid data types",
      });
    }
    const result = num1 - num2;
    if (result < -1000000) {
      return res.json({
        status: "error",
        message: "Underflow",
      });
    }
    return res.json({
      status: "success",
      message: "the difference of given two numbers",
      difference: result,
    });
  });
  
  app.post("/multiply", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
  
    if (typeof num1 == "string" && typeof num2 == "string") {
      return res.json({
        status: "failure",
        message: "Invalid data types",
      });
    }
    const reslt = num1 * num2;
    if (reslt > 1000000) {
      return res.json({
        status: "error",
        message: "Overflow",
      });
    }
    return res.json({
      status: "success",
      message: "The product of given numbers",
      result: reslt,
    });
  });
  
  app.post("/divide", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
  
    if (num2 === 0) {
      return res.json({
        status: "error",
        message: "Cannot divide by zero",
      });
    }
    const reslt = num1 / num2;
  
    if (reslt > 1000000) {
      return res.json({
        status: "error",
        message: "Overflow",
      });
    }
    return res.json({
      status: "success",
      message: "The division of given numbers",
      result: reslt,
    });
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app; 
