const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express(); 

const PUBLISHABLE_KEY = "pk_test_51MrnkqDFesxOGOSyUkJk6bQbYie4bA8UBkvP9ht1wgll7cOFClgbSXzooi40tkK4MqyFJVW8C2ZQmnV2seA1ZZRn00rK6wRD1D";
const SECRET_KEY = "sk_test_51MrnkqDFesxOGOSyY2BGVSLeD2JunRmkh8oRO5z3WyswfHBgxfBEmsp8VLXhB19LqQOlhwuEziDvVFkivoeRjcHO00VSiCogr6";

app.set("view engine", "ejs")

const PORT = process.env.PORT || 3300;

app.get('/', (req, res)=>{
    res.render('Home', {
        key:PUBLISHABLE_KEY
    })
})

app.listen(PORT, ()=>{
    console.log(`App is running at port ${PORT}`)
})