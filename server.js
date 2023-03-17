const express = require("express")
const mongoose = require("mongoose")
const Article = require("./models/article")
const articleRouter = require("./routes/articles")
const app = express()

let dotenv = require('dotenv').config()

// mongodb+srv://omarjeina23:l1t3vUrcMLnjGl94@cluster0.1bw4sim.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: false }))

app.get("/", async (req, res) => { 
    const articles = await Article.find().sort({ createdAt: "desc" })
    res.render("articles/index", { articles: articles })
})

app.use("/articles", articleRouter)

app.listen(5000)