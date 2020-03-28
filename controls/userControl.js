const UserModel = require('../db/model/userModel.js')
//用户登录
let userLogin = async (mail,pass)=>{
  let result = await UserModel.findOne({mail,pass})
  // console.log(result)
  if(result){
    return result
  }else{
    throw '用户或密码不存在'
  }
}
//管理员列表分页查询
let userList = async (page,pageSize)=>{
  let allUser = await UserModel.find()
  //总数据条数
  let allCount = allUser.length
  //每一页的数据
  let result = await UserModel.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize))
  return {result,allCount}
}
//添加管理人员
let userAdd = async (obj)=>{
  let result = await UserModel.insertMany(obj)
  if(result){
    return result
  }else{
    throw '插入数据失败'
  }
}
//删除管理人员
let userDel = async (_id)=>{
  let result = await UserModel.deleteMany({_id})
  if(result.n){
    return result
  }else{
    throw '删除失败'
  }
}
//修改管理人员信息
let userUpdate = async (_id,updateInfo)=>{
  let result = await UserModel.updateOne({_id},updateInfo)
  console.log(result)
  return result
}

module.exports={
  userLogin,
  userList,
  userAdd,
  userDel,
  userUpdate
}