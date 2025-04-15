const express=require("express");
const app=express();
//middleware
// app.use((req,res,next)=>{
//     console.log("hi,I am  1st middleware");
//     next();
//     // return next();
//     console.log("this is after next()");

// });



// app.use((req,res,next)=>{
//     console.log("hi,I am  2nd middleware");

//     next();
// });
//create utility
//logger
app.use((req,res,next)=>{
    req.time=new Date(Date.now()).toString();
    console.log(req.method,req.hostname,req.path,req.time);
    next();
});

app.get("/",(req,res)=>{
    let {query}=req.query;
    console.log(query);
    res.send("Hello World");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page");
});

app.listen(8080,()=>{
    console.log("server is running on port 8080");
});