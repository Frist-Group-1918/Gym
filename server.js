const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const db = require('./db/connect')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//静态资源路径
app.use(express.static(path.join(__dirname,'./public')))

let userRouter = require('./router/userRouter')
app.use('/admin',userRouter)
let memberRouter = require('./router/memberRouter')
app.use('/member',memberRouter)
let courseRouter = require('./router/courseRouter')
app.use('/course',courseRouter)
app.listen(3000,()=>{
  console.log('服务器启动成功')
})