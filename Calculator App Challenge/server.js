
const express = require('express');
const bodyParser= require('body-parser');


const app =express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res) {

    //res.send("hello");
    res.sendFile(__dirname+ "/index.html");


});


app.post("/",function(req,res) {

    //res.send("hello");
    //console.log(req.body);
    let num1=Number(req.body.input1);
    let num2=Number(req.body.input2);
    let result=num1+num2;
    res.send("thanku"+result);


});




app.listen(3000,function(){
    console.log('myserver')
})