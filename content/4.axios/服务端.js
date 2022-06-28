let express = require("express")

let app = express()
app.listen(1234, () => {
  console.log("1234端口监听成功")
})

app.get("/axios-get", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*")
  res.setHeader('content-type', 'text/html');
  res.send("axios_get")
})

app.post("/axios-post", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*")
  let shu = {
    data: "axios_post"
  }
  res.send(JSON.stringify(shu))
})