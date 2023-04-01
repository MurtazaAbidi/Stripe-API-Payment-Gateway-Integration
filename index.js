const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express(); 

const PUBLISHABLE_KEY = "pk_test_51MrnkqDFesxOGOSyUkJk6bQbYie4bA8UBkvP9ht1wgll7cOFClgbSXzooi40tkK4MqyFJVW8C2ZQmnV2seA1ZZRn00rK6wRD1D";
const SECRET_KEY = "sk_test_51MrnkqDFesxOGOSyY2BGVSLeD2JunRmkh8oRO5z3WyswfHBgxfBEmsp8VLXhB19LqQOlhwuEziDvVFkivoeRjcHO00VSiCogr6";

const stripe = require('stripe')(SECRET_KEY)

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set("view engine", "ejs")

const PORT = process.env.PORT || 3300;

app.get('/', (req, res)=>{
    res.render('Home', {
        key:PUBLISHABLE_KEY
    })
})

app.post('/payment', (req, res)=>{
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        name: 'Murtaza Abidi',
        address: {
            line1:'block 13-D, Gulshan-e-Iqbal, Karachi',
            postal_code:'110092',
            city: 'Karachi',
            state: 'Sindh',
            country: 'Pakistan'
        }
    })
    .then((customer)=>{
        return stripe.charges.create({
            amount: 7000,
            description: 'Web Development Product',
            currency:'USD',
            customer: customer.id
        })
    })
    .then((charge)=>{
        console.log(charge)
        res.send("success")
    })
    .catch((err)=>{
        res.send(err)
    })
})

app.listen(PORT, ()=>{
    console.log(`App is running at port ${PORT}`)
})