const express = require('express');
const router = express.Router();
const Student = require("./Models/Student");
const Teacher = require('./Models/Teacher');
const Course = require('./Models/Course');
const jwt = require('jsonwebtoken');

router.get("", async (req,res)=>{
    const cookie = await req.cookies.jwt;
    console.log(cookie);

    var verified;

    if(cookie){
        verified = await jwt.verify(cookie,"password-key");
        console.log(verified);

        var userData;

        if(verified.user == "student")
        userData = await Student.findById(verified.id); 

        if(verified.user == "teacher")
        userData = await Teacher.findById(verified.id); 

        console.log(userData);
        res.json({userData : userData, person : verified.user})
    }

    else {
        console.log("cookie not present");
        res.json( {userData : "Not Present"} )
    }  
})

router.post("", async (req,res)=>{
    const {data, email, goal} = req.body;
    if(goal == "add") await Teacher.updateOne({teacher_id : email}, { $push : { Courses : data } } );
    
    if(goal == "del") await Teacher.updateOne({teacher_id : email}, { $pull : { Courses : data } } );
    
    if(goal == "teacher"){
        const data = await Teacher.find({});
        res.send( data );
    }

    if(goal == "oneTeacher"){
        const data = await Teacher.find({teacher_id : email});
        //console.log(data);
        res.send( data[0] );
    }

    console.log(goal);
})

module.exports = router;