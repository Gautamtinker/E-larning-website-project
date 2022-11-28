const express = require('express');
const Course = require('./Models/Course');

const router = express.Router();

router.get("", async (req,res)=>{
    const data = await Course.find({});
    res.send(data);
} );

router.post("", async (req,res)=>{
    const {name , subject, title, content, id} = req.body;

    console.log(name);

    const data = new Course({
        Name : name,
        Subject : subject,
        Course_id : id,
        Title : title,
        Content : content
    })

    console.log(data);
    await data.save();

    res.send("Saved");

} )

module.exports = router;