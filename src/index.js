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
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.post('/add',(req,res)=>{
   
    const x=req.body.x;
    const y=req.body.y;

    if(typeof(x) ==="string" || typeof(y) === "string" ){
       return  res.json({status:'failure',message: "Invalid data types"})
    }
   
    else if(x>1000000 || y>1000000||x+y>1000000){
        return res.json({status:'error',message: "Overflow"})
    }
  
    //const z=x+y;
   return  res.json({status:'success',message: "the sum of given two numbers",sum:x+y})
   
})

app.post('/sub',(req,res)=>{
    const x=req.body.x;
    const y=req.body.y;

    if(typeof(x) ==="string" || typeof(y) === "string" ){
       return res.json({status:'failure',message: "Invalid data types"})
    }
   
    else if(x-y<-1000000){
       return res.json({status:'error',message: "Underflow"})
    }
    // else if(y<1000000){
    //     res.json({status:'error',message: "Underflow"})
    // }
    //const z=x+y;
    return res.json({status:'success',message: "the difference of given two numbers",difference:x-y})
})

app.post('/multiply',(req,res)=>{
    const x=req.body.x;
    const y=req.body.y;

    if(typeof(x) ==="string" || typeof(y) === "string" ){
        return res.json({status:'failure',message: "Invalid data types"})
    }
   
    else if(x*y>1000000 ){
       return  res.json({status:'error',message: "Overflow"})
    }
    // else if(y>1000000){
    //     res.json({status:'error',message: "Overflow"})
    // }
    //const z=x+y;
    return res.json({status:'success',message: "The product of given two numbers",result:x*y})
    

})

app.post('/divide',(req,res)=>{
    const x=req.body.x;
    const y=req.body.y;
    if(typeof(x) ==="string" || typeof(y) === "string" ){
        return res.json({status:'failure',message: "invalid data types"})
    }
    else if (y==0){
       return  res.send('Cannot divide by 0')
    }
    return res.send({status:'success',message: "The division of given two numbers",result:x/y})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app; 
