const express = require('express');   //exporting express model to use express here 
const MongoConnection = require("./config/db"); //export the model to connect to the mongodb
const cors = require('cors');
// const bodyParser = require('body-parser');
const app = express();  //express() creates a instance of express application and stored it in 
// app object handles requests, routes, middleware, and server logic.

//Body Parser is now outdated fro modern day web application instead use express middlware which is built-in
// and is more prefferable for modern applications
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
const contactroute = require("./routes/Contact");

app.use(express.json()); //it is a middleware that parses the incoming json request
//if the request comes in json format it convert the data into javascript object (which is req.body())
app.use(express.urlencoded({extended:true}));  //it enables to parse the incoming form-data and make it 
//available for req.body (use extended true alsways as it stores complex data in key value pairs)


MongoConnection(); //using the function from db.js

const port = 5000; //on port which to run the server

app.get('/',(req,res)=>{
    res.send("Backend running on port 5000")
})

app.use("/api",contactroute);

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
});