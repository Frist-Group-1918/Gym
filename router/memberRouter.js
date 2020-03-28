const express = require ("express")
const router = express.Router()
const {memberList,memberAdd,memberDel,memberUpdate} = require('../controls/memberControl.js')
//会员列表
router.get('/',(req,res)=>{
  let {page,pageSize} = req.query
  memberList(page,pageSize)
  .then((data)=>{
    let {allcount,result} = data
    res.send({err:0,msg:'查询成功',list:result,allcount})
  })
  .catch((err)=>{res.send({err:-1,msg:'查询失败'})})
})
//添加会员
router.post('/add',(req,res)=>{
  let {cardID,name,age,sex,date,recharge,type,course,salesman} = req.body
  console.log(req.body)
  memberAdd({cardID,name,age,sex,date,recharge,type,course,salesman})
  .then(()=>(res.send({err:0,msg:'插入成功'})))
  .catch((err)=>{res.send({err:-1,msg:'插入失败'})})
})
//删除会员
router.post('/del',(req,res)=>{
  let {_id} = req.body
  memberDel(_id)
  .then(()=>{res.send({err:0,msg:'删除成功'})})
  .catch((err)=>{res.send({err:-1,msg:'删除失败'})})
})
//修改会员信息
router.post('/update',(req,res)=>{
  let {_id,cardID,name,age,sex,date,recharge,type,course,salesman} = req.body
  memberUpdate(_id,{cardID,name,age,sex,date,recharge,type,course,salesman})
  .then(()=>{res.send({err:0,msg:'修改成功'})})
  .catch((err)=>{res.send({err:-1,msg:'修改失败'})})
})
module.exports = router