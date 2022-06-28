const express = require("express")

const app = express()
// app.post("/user", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*")
//   res.setHeader('content-type', 'text/html');
//   res.send("你好")
// })

app.all("/user", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*")
  res.setHeader('content-type', 'text/html');
  // 返回一个对象
  const dui = {
    name: "lc",
    age: 12
  }

  // 记住send只能接收字符串
  // 设置一个延迟

  // setTimeout(() => {
    res.send(JSON.stringify(dui))
  // }, 3000)

})

app.listen(1234, () => {
  console.log("1234,监听成功")
})