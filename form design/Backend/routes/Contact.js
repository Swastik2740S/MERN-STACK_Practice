const express = require('express');
const router = express.Router();
const Contact = require('../models/ContactSchema');

router.post("/contact", async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save();
        console.log(savedContact);
        res.status(201).json({ msg: "Contact saved successfully", contact: savedContact });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Unable to create new contact", error: error.message });
    }
});

router.get("/getcontacts",async(req,res)=>{
    try{
        const contacts = await Contact.find();
        res.status(200).json({contacts});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({msg:"Unable to fecth the details"})
    }
})



module.exports = router;