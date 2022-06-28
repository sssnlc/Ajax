let express = require("express")

let app = express()

app.get("/json", (req, res) => {
  console.log(req.query)
  let shu = JSON.stringify(req.query)
  console.log(shu)
  res.send(`zhuan(${shu})`)
}).listen(1234)