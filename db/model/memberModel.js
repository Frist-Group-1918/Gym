const mongoose = require('mongoose')
let memberSchema = new mongoose.Schema({
  cardID:{type:String,required:true},
  name:{type:String,required:true},
  age:{type:String,required:true},
  sex:{type:String,required:true},
  date:{type:String,required:true},
  recharge:{type:String,required:true},
  type:{type:String,required:true},
  course:{type:String,required:false},
  salesman:{type:String,required:false}
})
let memberModel = mongoose.model('members',memberSchema)
module.exports = memberModel 