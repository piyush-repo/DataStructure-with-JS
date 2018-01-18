"use strict";

const express = require('express');
const app = express();
console.log("Hello jenkins");

app.get('/', (req, res) => {
    console.log("root url");
    res.status(200).json({ success: true });
})


app.get('/get', (req, res) => {
    console.log("get url");
    res.status(200).json({ success: true });
})
app.listen(5000,()=>{
    console.log("Application is listening over port 5000");
});