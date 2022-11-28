const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Blogger",{useNewUrlParser : true});

const course_schema = new mongoose.Schema ({
    Name : String,
    Subject : String,
    Course_id : String,
    Title : String,
    Content : String
});

const Course = mongoose.model("course", course_schema);

module.exports = Course;