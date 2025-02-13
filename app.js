const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

app.get("/hello", (req, res) => {
  res.send("Hello, if you are seeing this that means Gitops was successfully")
})

app.listen(PORT, () => {
  console.log(`This server is listening on PORT: ${PORT}`)
})
