const exp = require("express")
// 创建
let app = exp()

//路由 
app.get("/", (req, res) => {
  res.send("hello")
})
// 监听
app.listen(8666, () => {
  console.log("8666端口正在监听")
})