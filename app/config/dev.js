module.exports = {
  app: {
    title: 'express-home',
    description: 'express-home',
    keywords: 'express-home'
  },
  hosts: '127.0.0.1',
  port: 8200,
  db: {
    hosts: 'mongodb://127.0.0.1:27017/test',
    usersModel: 'wxusers',  // 用户数据库表名
    infoModel: 'wxinfo',  // 发布信息数据库表名
  },
  session: {
    secret: 'cat',
    sessionID: 'sessionID',
    resave: false,
    saveUninitialized: true
  },
  cookie: {
    maxAge: 24 * 60 * 60,
    httpOnly: true,
    domain: 'scnu.club',
    resave: false,
    secure: false
  },
  redis: {
    hosts: '127.0.0.1',
    port: '6379',
    ttl: 60 * 60 * 24,  // redis 数据过期时间 秒
  },
  token: {
    secret: 'secret',
    expiresIn: 60 * 60 * 24
  }
};