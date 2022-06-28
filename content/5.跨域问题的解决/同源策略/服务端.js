let express = require("express")
let app = express()

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/客户端.html")
})

app.post("/shuju", (req, res) => {
  res.send("这是一个数据")
})
app.listen(1234, () => {
  console.log("1234端口正在被监听")
})
