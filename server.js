
const moment = require('moment');
const express = require('express');

const app = express();
const port = 3000;

//routes
app.get("/india", (req, res) => {
    let indiaTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    res.json({
        timeZone : {
            India : indiaTime,

        }  
    })
});

app.get("/america",(req,res) => {
    let americaTime = moment().subtract(9.5,'hour').format('MMMM Do YYYY, h:mm:ss a');
    res.json({
        timeZone : {
            America : americaTime,
        }  
    })
})

app.get("/australia",(req,res) => {
    let australiaTime = moment().add(4.5, 'hours').format('MMMM Do YYYY, h:mm:ss a');
    res.json({
        timeZone : {
            Australia : australiaTime,
        }  
    })
})

app.get("/uae",(req,res) => {
    let uaeTime = moment().subtract(1.5,'hour').format('MMMM Do YYYY, h:mm:ss a');
    res.json({
        timeZone : {
            UAE : uaeTime,
        }  
    })
})

app.get("/uae",(req,res) => {
    let uaeTime = moment().subtract(1.5,'hour').format('MMMM Do YYYY, h:mm:ss a');
    res.json({
        timeZone : {
            UAE : uaeTime,
        }  
    })
})

app.get("/uk",(req,res) => {
    let ukTime = moment().subtract(4.5,'hour').format('MMMM Do YYYY, h:mm:ss a');
    res.json({
        timeZone : {
            UK : ukTime,
        }  
    })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

