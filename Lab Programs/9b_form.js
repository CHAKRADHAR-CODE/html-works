// 9) b. Write a program to work with form data.

const exp = require('express');
const app = exp();

app.use(exp.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.send(`
        <form method="POST" action="/submit">
            Name: <input type="text" name="name"><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/submit',(req,res)=>{
    res.send("Received: "+req.body.name);
});
app.listen(3000, ()=>{
    console.log("Server running");
});