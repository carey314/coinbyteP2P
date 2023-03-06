import express from 'express'
import bodyParser from 'body-parser'
// import redisClient from './redis'
import mssql from 'mssql'
import moment from 'moment'
import cors from 'cors'
import session from 'express-session'
const app = express()
app.use(cors())
app.use(bodyParser.json())
const config = {
  user: 'sa',
  password: '12345',
  port: 1433,
  server: '192.168.0.41',
  database: 'pfdata',
  options: {
    encrypt: false //加上这个就不会报错
  },
}

const sqlServer = new mssql.ConnectionPool(config);
const sqlServerConnect = sqlServer.connect();

sqlServer.on('error', err => {
  return {
    code: 500,
    msg: '数据获取失败，请联系开发人员'
  }
})


// 这里用来验证是否登录
app.post('/authenticate', async (req, res, next) => {
  const { token, sid, name } = req.body
  try {
    // 检查请求的真实IP是否为授权系统
    // nginx会将真实IP传过来，伪造x-forward-for是无效的
    if (!checkSecurityIP(req.headers['x-real-ip'])) {
      throw new Error('ip is invalid')
    }
    // 判断token是否还存在于redis中并验证token是否有效, 取得用户名和用户id
    const tokenExists = await redisClient.existsAsync(token)
    if (!tokenExists) {
      throw new Error('token is invalid')
    }
    const { username, id } = await jwt.verify(token, tokenConfig.secret)
    // 校验成功注册子系统
    register(token, sid, name)
    return res.json({
      code: 0,
      msg: 'success',
      data: { username, id }
    })
  } catch (err) {
    // 对于token过期也应该执行一次clear操作
    next(new Error(err))
  }
})

app.post('/user/signIn', async (req, res, next) => {

  // 通过 username 跟 password 取出数据库中的用户
  try {
    const { userName, password } = req.body

    const request = sqlServer.request();
    const result  = await request.query(`
      select 
        a.loginid --登录名id
        ,a.password --登录密码
        ,a.businessid --客户内码
        ,b.businessname --客户名称
        ,c.pricelevel --客户价格等级
      from userlogin a
        join businessdoc b on a.businessid = b.businessid
        join clientdoc c on a.businessid = c.clientid
      where a.loginid = '${userName}' and a.password = '${password}'
    `)
    console.log(result)
    if (result.recordset.length > 0) {
      return res.json({
        code: 0,
        data: {
          ...result.recordset[0]
        },
        msg: 'success'
      })
    } else {
      return res.json({
        code: 301,
        msg: '用户名或者密码不正确'
      })
    }

  } catch (err) {
    console.log(err)
    next(new Error(err))
  }
})
app.post('/shop/list', async (req, res, next) => {

  // 通过 username 跟 password 取出数据库中的用户
  try {
    const { levelprice, pageNum, limit, searchName } = req.body

    const request = sqlServer.request();
    const requestCount = sqlServer.request();
    console.log(levelprice)

    request.input('pricelevel', mssql.NVarChar, levelprice);
    request.input('pageNum', mssql.Int, pageNum);
    request.input('limit', mssql.Int, limit);
    request.input('searchName', mssql.NVarChar, searchName);
    requestCount.input('searchName', mssql.NVarChar, searchName);
    requestCount.input('pricelevel', mssql.NVarChar, levelprice);
    const result = await request.execute("YXC_YCKP_KCMX")
    const count = await requestCount.execute("YXC_YCKP_COUNT")
    return res.json({
      code: 0,
      result,
      count: count.recordset[0].count,
      msg: 'success'
    })

  } catch (err) {
    console.log(err)
    next(new Error(err))
  }
})
app.post('/cart/add', async (req, res, next) => {

  // 通过 username 跟 password 取出数据库中的用户
  try {
    const { businessid, goodsid, batchcode, valdate, num, taxprice } = req.body

    const request = sqlServer.request();

    request.input('businessid', mssql.NVarChar, businessid);
    request.input('goodsid', mssql.NVarChar, goodsid);
    request.input('batchcode', mssql.NVarChar, batchcode);
    request.input('valdate', mssql.NVarChar, valdate);
    request.input('taxprice', mssql.Float, taxprice);
    request.input('num', mssql.Int, num);
 

    const result = await request.execute("YXC_YCKP_ORDER")
    return res.json({
      code: 0,
      result,
      msg: 'success'
    })

  } catch (err) {
    console.log(err)
    next(new Error(err))
  }
})
app.post('/cart/get', async (req, res, next) => {

  // 通过 username 跟 password 取出数据库中的用户
  try {
    const { businessid } = req.body

    const request = sqlServer.request();

    request.input('businessid', mssql.NVarChar, businessid);
    const result = await request.execute("YXC_YCKP_ORDERQUERY")
    return res.json({
      code: 0,
      result,
      msg: 'success'
    })

  } catch (err) {
    console.log(err)
    next(new Error(err))
  }
})
app.post('/cart/update', async (req, res, next) => {

  // 通过 username 跟 password 取出数据库中的用户
  try {
    const { yxc_id, num } = req.body

    const request = sqlServer.request();

    request.input('yxc_id', mssql.Int, yxc_id);
    request.input('num', mssql.Int, num);
    const result = await request.execute("YXC_YCKP_UPORDER")
    return res.json({
      code: 0,
      result,
      msg: 'success'
    })

  } catch (err) {
    console.log(err)
    next(new Error(err))
  }
})
app.post('/cart/delete', async (req, res, next) => {
  try {
    const { yxc_id } = req.body

    const request = sqlServer.request();

    request.input('yxc_id', mssql.VarChar, yxc_id);
    const result = await request.execute("YXC_YCKP_DELORDER")
    return res.json({
      code: 0,
      result,
      msg: 'success'
    })

  } catch (err) {
    console.log(err)
    next(new Error(err))
  }
})
app.post('/order/create', async (req, res, next) => {
  try {
    const { yxc_id } = req.body

    const request = sqlServer.request();

    request.input('yxc_id', mssql.NVarChar, yxc_id);
    request.input('code', mssql.NVarChar, `${+new Date()}`);
    const result = await request.execute("YXC_YCKP_SUBORDER")
    return res.json({
      code: 0,
      result,
      msg: 'success'
    })

  } catch (err) {
    console.log(err)
    next(new Error(err))
  }
})
app.post('/order/get', async (req, res, next) => {
  try {
    const { startdate, enddate, businessid } = req.body

    const request = sqlServer.request();

    request.input('startdate', mssql.NVarChar, moment(startdate).format('YYYY-MM-DD'));
    request.input('enddate', mssql.NVarChar, moment(enddate).format('YYYY-MM-DD'));
    request.input('businessid', mssql.NVarChar, businessid);
    const result = await request.execute("YXC_YCKP_ORDERMANAGE")
    return res.json({
      code: 0,
      result,
      msg: 'success'
    })

  } catch (err) {
    console.log(err)
    next(new Error(err))
  }
})
app.post('/order/detail', async (req, res, next) => {
  try {
    const { yxc_code } = req.body

    const request = sqlServer.request();

    request.input('yxc_code', mssql.NVarChar, yxc_code);
    const result = await request.execute("YXC_YCKP_ORDERDETAIL")
    return res.json({
      code: 0,
      result,
      msg: 'success'
    })

  } catch (err) {
    console.log(err)
    next(new Error(err))
  }
})
app.post('/changePwd', async (req, res, next) => {
  try {
    const { loginid, password } = req.body

    const request = sqlServer.request();

    request.input('loginid', mssql.NVarChar, loginid);
    request.input('password', mssql.NVarChar, password);
    const result = await request.execute("YXC_YCKP_MODLOGIN")
    return res.json({
      code: 0,
      result,
      msg: 'success'
    })

  } catch (err) {
    console.log(err)
    next(new Error(err))
  }
})

// 用户主动退出登录，将所有的子系统退出
app.post('/logout', async (req, res, next) => {
  // 这里需要做的就是把 token 对应的所有子系统的 seesionID 清除
  try {
    let cookies = splitCookies(req.headers.cookie)
    let token = cookies['token']
    console.log('cookies: ', cookies)

    if (token) {
      await clearClientStore(token)
      await deleteToken(token)
    }

    return res.json({
      code: 0,
      msg: 'logout success'
    })
  } catch (err) {
    next(new Error(err))
  }
})


// 这里对所有抛出的异常简单处理一下
app.use((err, req, res, next) => {
  console.error('err: ', err.message)
  return res.json({
    code: 9999,
    msg: err.message
  })
})

const port = 3008
console.log('passport server listen port: ', port)
app.listen(port)
