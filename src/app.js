const path = require('path');
const express = require('express');

const app = express();

const staticpath = path.join(__dirname,'../public')

//builtin middleware
app.use(express.static(staticpath));
app.get("/",(req,res)=>{

    res.write("<h1>Hello world from express js for tutorial from thapa</h1>");
    res.write("<h2>Hello world from express js for tutorial from thapa again</h2>");
    res.send();
    
});

app.get("/about",(req,res)=>{

    res.send("Hello world from about us");
})

app.get("/temp",(req,res)=>{
    res.json([
        {
        id:1,
        name:'meenakshipal'
        },
        {
            id:2,
            name:'ruby'
        },
        {
            id:3,
            name:'pihu'
        }
    ]);
})

app.listen("8000",()=>{

    console.log('listen express');
})