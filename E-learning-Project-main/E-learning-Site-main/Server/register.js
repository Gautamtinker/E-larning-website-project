const express = require('express');
const router = express.Router();
const Student = require('./Models/Student');
const bcrypt = require('bcryptjs');
const Teacher = require('./Models/Teacher');

router.get("", (req,res)=>{
    
})

router.post("", async (req,res)=>{

    const user = req.body.person;
    const { name, clas, branch, subject, email, password, c_password } = req.body;

    // if(name ==""|| clas == "" || branch == "" || email == "" || password == "" || c_password == ""){        
    //     return res.json({message : "Plz fill all fields"});
    // }

    try {

        var emailExist = [];
        if(user == "teacher")
        emailExist = await Teacher.find({teacher_id : email});

        if(user == "student")
        emailExist = await Student.find({Stu_id : email});

        if(emailExist.length >=1){
            return res.json({message : "Email already exists, Try again"});
        }

        if(password != c_password){
            return res.json({message : "Password not match"});
        }

        console.log("done");
        const hash_password = await bcrypt.hash(password,12);

        var detail;

        if(user == "student")
            detail = new Student({
                Name : name,
                Class : clas,
                Branch : branch,
                Stu_id : email,
                Password : hash_password
            });

        if(user == "teacher")
            detail = new Teacher({
                Name : name,
                Subject : subject,
                teacher_id : email,
                Password : hash_password
            })

        // console.log(user);
        await detail.save();
        return res.status(201).json({message : "User register Successfuly"});
    }
    catch(err){
        console.log(err)
    }

});

module.exports = router;
