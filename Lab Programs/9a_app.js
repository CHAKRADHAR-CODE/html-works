// 9) a. Write a program using templating engine.

const exp = require('express');
const app = exp();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('9a_index',{name:"CHAKRADHAR"});
});
app.listen(3000,()=>{
    console.log("server running on port 3000");
});