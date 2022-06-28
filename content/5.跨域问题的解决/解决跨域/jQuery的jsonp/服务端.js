let express = require("express")

let app = express()

app.get("/json", (req, res) => {
  let s = req.query.callback
  const d = {
    name: 'lc'
  }

  let D = JSON.stringify(d)
  console.log(s)
  res.end(`${s}(${D})`)
}).listen(1234)