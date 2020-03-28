//数据库的连接文件
var mongoose = require('mongoose')
let dbUrl = 'mongodb+srv://1918:1918@gym-see9h.mongodb.net/gym?retryWrites=true&w=majority'
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})

var db = mongoose.connection
db.on('error',()=>{console.log('数据库连接失败')})
db.once('open',function(){
  console.log('数据库第一次连接成功')
})