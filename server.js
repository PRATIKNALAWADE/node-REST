const express = require('express');

const app = express();


app.listen(3000,()=>console.log("Server running on port 3000"));


//declaring app routes
app.get('/',(req,res)=>{
    res.send("Hello bhidu");
})