import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

var app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
const url = "https://newsapi.org/v2/everything";
const api_Key = "cfefed28243147b39066d2df66a78b88";

app.get('/', async (req, res) => {
    const result = await axios.get(`${url}?q=everything&apiKey=${api_Key}`);
    res.render("index.ejs", {articles : result.data.articles});
})

app.post('/search',async (req, res) => {
    var query = req.body.newsinput;
    const result = await axios.get(`${url}?q=${query}&apiKey=${api_Key}`);
    res.render("index.ejs", {articles : result.data.articles});
})

app.listen(port, (req, res) => {
    console.log(`Your app is running on port: ${port}`);
})