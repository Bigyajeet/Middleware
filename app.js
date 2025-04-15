const express=require("express");
const app=express();
const ExpressError=require("./ExpressError")
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
// app.use((req,res,next)=>{
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });

//exploring app.use()

// app.use("/random",(req,res,next)=>{
// console.log("hello guys this the radom page exploring use");
// next();
// });


//API  TAKEN AS QUERY STRING

// app.use("/api",(req,res,next)=>{
//     let {token}=req.query;
//     if(token==="bigya"){
//         res.send("Access Granted");
//         next();
//     }else{
//         res.send("Access Denied");
//     }
// });
// app.get(("/api"),(req,res,next)=>{
//     res.send("data");

// });

//passing multiple middleware


// const checkaccess=((req,res,next)=>{
//     let {token}=req.query;
//     if(token==="bigya"){
//         res.send("Access Granted");
//         next();
//     }else{
//         res.send("Access Denied");
//     }
// });
// app.get(("/api"),checkaccess,(req,res,next)=>{
//     res.send("data");

// });

//error  handling

// app.get("/wrong",(req,res)=>{
//     abcd=abcd
// });

//creation of an error i.e throw of an error
// const checkaccess=((req,res,next)=>{
//     let {token}=req.query;
//     if(token==="bigya"){
//         res.send("Access Granted");
//         next();
//     }else{
//         throw new Error("Access Denied");
//     }
// });
// app.get(("/api"),checkaccess,(req,res,next)=>{
//     res.send("data");

// });

//generating own error
app.get("/err",(req,res)=>{
    abcd=abcd;
});
//err handler
app.use((err,req,res,next)=>{

    console.log("__________Error_______");
    res.send(err);
    // next(); //looks for non-error handler
    // next(err);//display the error in  the fronted
});


// app.use((err,req,res,next)=>{

//     console.log("__________Error2 Middleware_______");
    // next(); //looks for non-error handler
    //display the error in  the fronted
// });

app.get("/",(req,res)=>{
    let {query}=req.query;
    console.log(query);
    res.send("Hello World");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page");
});

app.use("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token==="bigya"){
        res.send("Access granted")
        next(err);
    }else{
        throw new ExpressError(401,"Access denied");
        
    }
});

// app.use((req,res,next)=>{
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });


//404 
app.use((req,res)=>{
    res.status(404).send("page not found !");
});



app.listen(8080,()=>{
    console.log("server is running on port 8080");
});