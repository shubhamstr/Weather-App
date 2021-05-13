const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs')

const port = process.env.PORT || 8000


console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', templatePath)
hbs.registerPartials(partialsPath)
app.use(express.static(staticPath));


app.get("", (req, res) => {
    // res.send("welcome my site");
    res.render("index");
});

app.get("/about", (req, res) => {
    // res.send("welcome my about page");
    res.render("about");
});

app.get("/weather", (req, res) => {
    // res.send("welcome my weather page");
    res.render("weather");
});


app.get("*", (req, res) => {
    // res.send("404 page");
    res.render("404");
});

app.listen(port, () => {
    console.log("listening port");
    console.log("http://localhost:8000");
});