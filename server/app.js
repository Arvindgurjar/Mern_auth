const dotenv = require("dotenv");
const express = require('express');
const app = express();
dotenv.config({path:"./config.env"});
require("./db/connection");
const port = process.env.PORT 
app.use(express.json())
app.use(require("./router/rrouter"))


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/contact', (req, res) => {
    res.send('contact Hello World')
})
app.get('/signin', (req, res) => {
    res.send('login')
})
app.get('/signup', (req, res) => {
    res.send('register')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))