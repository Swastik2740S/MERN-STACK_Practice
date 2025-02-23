const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
        minLength:3,
        trim: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    age:{
        type:Number,
        required:false
    }

})

module.exports = mongoose.model('Contact',contactSchema);
