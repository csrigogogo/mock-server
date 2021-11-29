const express = require("express")
const app = express()
const contentDisposition = require("content-disposition")

app.get("/", (req, res) => {
  res.send("Hello World!")
})
app.get("/logo", (req, res) => {
  const file = `${__dirname}/logo.png`
  //  预览图片
  res.setHeader(
    "Content-Disposition",
    contentDisposition(file, { type: "inline" })
  )
  res.sendFile(file)
  //  下载图片
  //   res.setHeader("Content-Disposition", contentDisposition(file, { type: 'attachment' }))
  //   res.sendFile(file)
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
