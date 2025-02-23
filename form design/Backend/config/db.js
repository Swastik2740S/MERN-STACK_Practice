const mongoose = require('mongoose');

const connecttodb = async()=>{
    try{
       await mongoose.connect('mongodb://localhost:27017/practice',{
        // useNewUrlParser:true, //no need to use these options as after 
        // Mongoose 6+ and MongoDB Driver 4+ handle parsing automatically.
        // useUnifiedTopology:true
       }); //main function to connect with mongodb
       console.log("Connected to mongodb");
    }
    catch(error){
        console.log(error);
        process(exit(1));
    }
}

module.exports = connecttodb;