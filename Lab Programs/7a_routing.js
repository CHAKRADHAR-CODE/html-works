// 7) a. Write a program to define a route, Handling Routes, Route Parameters, Query Parameters and URL building.

const exp = require('express');
const app = exp();

// Simple Route
app.get('/',(req,res)=>{
    res.send("Home Page");
});

// Route Parameter
app.get('/user/:name',(req,res)=>{
    res.send("User: "+req.params.name);
});

// Query Parameter
app.get('/search',(req,res)=>{
    res.send("Search: "+req.query.q);
});

// URL Building
app.get('/profile', (req, res) => {
    res.send("Go to /user/yourname to view profile");
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});