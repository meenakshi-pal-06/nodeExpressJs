const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const templatePath = path.join(__dirname,'../templates');
console.log(templatePath);
//to view the set engin
app.set('view engine',"hbs");
app.set("views",templatePath);

app.get("/",(req,res)=>{

    res.render('index',{
        name:"Meenakshi Pal"
    });
});

app.get("/about",(req,res)=>{
    res.render('about');
});

app.listen(port,()=>{

    console.log(`listening to the port ${port}`);

});