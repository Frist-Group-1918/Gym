const MemberModel = require('../db/model/memberModel')
//会员列表
let memberList = async (page=1,pageSize=2)=>{
  let allMember = await MemberModel.find() 
  let allCount = allMember.length
  let result = await MemberModel.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize))
  return {result,allCount}
}
//会员添加
let memberAdd = async (obj)=>{
  let result = await MemberModel.insertMany(obj)
  return result
}
//会员删除
let memberDel = async (_id)=>{
  let result = await MemberModel.deleteOne({_id})
  return result
}
//会员信息修改
let memberUpdate = async (_id,updateInfo)=>{
  let result = await MemberModel.updateOne({_id},updateInfo)
  return result
}
module.exports={
  memberList,
  memberAdd,
  memberDel,
  memberUpdate
}
