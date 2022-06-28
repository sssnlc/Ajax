let express = require("express")
const bodyParser = require("body-parser")
let app = express()
app.use(bodyParser.urlencoded({extended:true})) // 是否进行url解码
app.use(bodyParser.json()) 

app.get("/get", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*")
  res.setHeader('content-type', 'text/html');
  res.send("你好jqueryAjax GET")
})

app.post("/post", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*")
  res.setHeader('content-type', 'text/html');
  let shu = {
    name: "lc",
    age: 21
  }
  console.log(req.body)
  res.send(JSON.stringify(shu))
})

app.listen(1234, () => {
  console.log("监听1234端口成功")
})