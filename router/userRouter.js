const express = require('express')
const router = express.Router()
const {userLogin,userList,userAdd,userDel,userUpdate} = require
('../controls/userControl.js')
//用户登录
router.post('/login',(req,res)=>{
  let {mail,pass} = req.body
  // console.log(mail,pass)
  userLogin(mail,pass)
  .then((info)=>{
    res.send({err:0,msg:'登录成功',userInfo:info})
  })
  .catch((err)=>{res.send({err:-1,msg:err})})
})
//管理人员列表
router.get('/',(req,res)=>{
  let {page} = req.query || 1 //查询第几页数据
  let {pageSize} = req.query || 2
  userList(page,pageSize)
  .then((info)=>{
    // console.log(info)
    let {result,allCount} = info
    res.send({list:result,err:0,msg:'查询成功',allCount})
  })
  .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
})
//添加管理人员
router.post('/add',(req,res)=>{
  let {mail,pass} = req.body
  userAdd({mail,pass})
  .then(()=>{res.send({err:0,msg:'插入成功'})})
  .catch((err)=>{res.send({err:-1,msg:err})})
})
//删除管理人员
router.post('/del',(req,res)=>{
  let {_id} = req.body
  console.log(_id)
  userDel(_id)
  .then(()=>{res.send({err:0,msg:'删除成功'})})
  .catch((err)=>{res.send({err:-1,msg:err})})
})
//修改管理人员信息
router.post('/update',(req,res)=>{
  let {_id,mail,pass} = req.body
  userUpdate(_id,{mail,pass})
  .then(()=>{res.send({err:0,msg:'修改成功'})})
  .catch((err)=>{res.send({err:-1,msg:err})})
})
module.exports = router