const CourseModel = require('../db/model/courseModel')
//课程列表
let courseList = async (page=1,pageSize=2)=>{
  let allCourse = await CourseModel.find() 
  let allCount = allCourse.length
  let result = await CourseModel.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize))
  return {result,allCount}
}
//课程添加
let courseAdd = async (courseName)=>{
  let result = await CourseModel.insertMany({courseName})
  console.log(result)
  return result
}
//课程删除
let courseDel = async (_id)=>{
  let result = await CourseModel.deleteOne({_id})
  return result
}

module.exports={
  courseList,
  courseAdd,
  courseDel,
}