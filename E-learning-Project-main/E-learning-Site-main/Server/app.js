const express =require('express');
const student = require('./student');
const login = require('./login');
const register = require('./register');
const allCourse = require('./allCourse');
const profile = require('./profile');
const logout = require('./logout')
const bodyParse = require('body-parser');
const parser = require('cookie-parser')

const app = express();
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json())
app.use(parser());

app.use("/student", student);
app.use("/login", login );
app.use("/register", register);
app.use("/allcourse", allCourse);
app.use("/profile",profile);
app.use("/logout",logout);

app.listen(5000,()=>{console.log("Server is running on port 5000")});