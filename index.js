const express = require("express")
const path = require("path")
const app = express()

app.get('/ExpenseTracker', (req, res)=>{
    res.sendFile(path.resolve(__dirname + "/indexTwo.html"))
})

app.listen(4000,()=>{
        console.log("liseing on port 4000");
    })
        // console.log(__dirname);