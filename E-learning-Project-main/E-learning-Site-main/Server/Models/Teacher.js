const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Blogger",{useNewUrlParser : true});

const teacher_schema = new mongoose.Schema ({
    Name : String,
    Subject : String,
    teacher_id : String,
    Password : String,
    Courses : Array,
});

const Teacher = mongoose.model("teacher", teacher_schema);

module.exports = Teacher;