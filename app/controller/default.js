const path = require('path')
const userModel = require(path.resolve('./app/models/user'))
const infoModel = require(path.resolve('./app/models/info'))
const debug = require('debug')('app:defaultCTRL')

module.exports = {
  default: (req, res) => {
    res.sendFile(path.resolve('./app/public/index.html'))
  },
  addInfo: async (req, res) => {
    let date = new Date()
    let createTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    const {title, content, author, info, detail, gender, grade, money} = req.body
    const newInfo = new infoModel({
      title,
      content,
      author,
      info,
      createTime,
      detail,
      gender,
      grade,
      money
    })
    const addInfoRes = await newInfo.save()
    addInfoRes ? res.send({success: true, msg: '添加成功'}) : res.send({success: false, msg: '添加失败'})
  },
  register: async (req, res) => {
    try {
      const { userName, gender, email, qq, country, code } = req.body
      // 数据库查找
      let findUserName = await userModel.find({ userName })
      if (findUserName) {
        res.send({ success: false, msg: '用户名已经被注册' })
        return
      }
      let findEmail = await userModel.find({ email })
      if (findEmail) {
        res.send({ success: false, msg: '邮箱已经被注册' })
        return
      }
      let findQQ = await userModel.find({ qq })
      if (findQQ) {
        res.send({ success: false, msg: 'QQ已经被注册' })
        return
      }
      const newUser = new userModel({
        userName,
        gender,
        email,
        qq,
        country,
        openid
      })
      // 保存到数据库
      let user = await newUser.save()
      if (user) {
        res.send({success: true, msg: '注册成功'})
      } else {
        res.send({success: false, msg: '注册失败'})
      }
    } catch (err) {
      res.send({err})
    }
  }
};
