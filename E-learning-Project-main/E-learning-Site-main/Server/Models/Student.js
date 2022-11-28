const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Blogger",{useNewUrlParser : true});

const student_schema = new mongoose.Schema ({
    Name : String,
    Class : String,
    Branch : String,
    Stu_id : String,
    Password : String,
    Enrolled_courses : Array,
});

const Student = mongoose.model("student", student_schema);

module.exports = Student;