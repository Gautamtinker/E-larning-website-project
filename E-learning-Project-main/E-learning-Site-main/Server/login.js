const express = require('express');
const Teacher = require('./Models/Teacher');
const Student = require('./Models/Student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get("", (req,res)=>{
    res.send("Jai shree ram, Hare krishna");
} );

router.post("", async (req,res)=>{
    try{
    const {person, email , password} = req.body;

    if(email == "" || password == ""){
        return res.json({message : "Empty fields", log : false})
    }

    var userExist;

        if(person == "teacher")
        userExist = await Teacher.find({teacher_id : email});

        else if(person == "student")
        userExist = await Student.find({Stu_id : email})


    if(userExist.length >= 1){
        const isMatch =  await bcrypt.compare(password, userExist[0].Password);
        if(isMatch){
            
            console.log(userExist[0]._id);
            
            const token = jwt.sign( {id : userExist[0]._id, user : person}, "password-key" );
            //console.log ("token is " + token);
            res.cookie( "jwt" , token )
            
            res.json({message : "", user : userExist[0], log : true})
        }
        else{
            return res.json({message : "Invalid Password", log : false})
        }
    }else{
        return res.json({message : "Email not exist", log : false})
    }
}
catch(err){
    console.log(err);
}

});

module.exports = router;