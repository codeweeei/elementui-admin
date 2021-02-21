const express = require("express")

const app = express()
//允许跨域
app.use(require("cors")())
//使用可识别客户端提交过来的json数据的中间件
app.use(express.json())
//创建数据库模型
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/element-admin", {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
//创建文章模型数据库
const Article = mongoose.model(
  "Article",
  new mongoose.Schema({
    //定义文章模型结构
    title: { type: String },
    body: { type: String },
  })
)
//新增文章接口
app.post("/api/articles", async (req, res) => {
  //将前端输入的文章标题以及内容传入文章模型数据库里
  const article = await Article.create(req.body)
  //将创建的文章发送回客户端用于渲染显示
  res.send(article)
})

//显示文章列表接口
app.get("/api/articles", async (req, res) => {
  //查询文章模型数据库里的文章，然后发送给前端渲染
  const articles = await Article.find()
  // console.log(articles)
  res.send(articles)
})
//删除文章接口
app.delete("/api/articles/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.send({
    status: true,
    message: "删除文章成功~"
  })
})

app.get("/", async (req, res) => {
  res.send("index")
})

app.listen(3001, () => {
  console.log("http://localhost:3001")
})
