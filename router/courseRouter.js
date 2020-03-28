const express = require ("express")
const router = express.Router()
const {courseList,courseAdd,courseDel} = require('../controls/courseContorl')
//课程列表
router.get('/',(req,res)=>{
  let {page,pageSize} = req.query
  courseList(page,pageSize)
  .then((data)=>{
    let {allcount,result} = data
    res.send({err:0,msg:'查询成功',list:result,allcount})
  })
  .catch((err)=>{res.send({err:-1,msg:'查询失败'})})
})
//添加课程
router.post('/add',(req,res)=>{
  let {courseName} = req.body
  console.log(req.body)
  courseAdd(courseName)
  .then(()=>(res.send({err:0,msg:'插入成功'})))
  .catch((err)=>{res.send({err:-1,msg:'插入失败'})})
})
//删除课程
router.post('/del',(req,res)=>{
  let {_id} = req.body
  courseDel(_id)
  .then(()=>{res.send({err:0,msg:'删除成功'})})
  .catch((err)=>{res.send({err:-1,msg:'删除失败'})})
})

module.exports = router