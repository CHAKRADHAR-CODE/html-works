// 7) b. Write a program to accept data, retrieve data and delete a specified resource using http methods.

const exp = require('express');
const app = exp();
app.use(exp.json());
let data = [];

// GET - Retrieve Data
app.get('/data',(req,res)=>{
    res.json(data);
});

// POST - Add Data
app.post('/data',(req,res)=>{
    data.push(req.body);
    res.send("Data Added");
});

// DELETE - Remove Data
app.delete('/data/:id',(req,res)=>{
    data.splice(req.params.id,1);
    res.send("Data Deleted");
});

app.listen(3000,()=>{
    console.log("Server is Running at port 3000");
});