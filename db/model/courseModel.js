const mongoose = require('mongoose')

let courseSchema = new mongoose.Schema({
   courseName  : { type:String ,required:true},
})

let courseModel = mongoose.model('courses',courseSchema)

module.exports = courseModel