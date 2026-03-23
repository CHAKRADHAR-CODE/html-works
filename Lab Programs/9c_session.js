// 9) c. Write a program for session management using cookies and sessions.

const exp = require('express');
const ses = require('express-session');
const app = exp();

app.use(ses({
    secret:'secret',
    resave: false,
    saveUninitialized: true
}));

// Set Session
app.get('/set',(req,res)=>{
    req.session.user = "Student";
    res.send("session set");
});

// Get Session
app.get('/get',(req,res)=>{
    res.send("user: "+req.session.user);
});

// Destroy Session
app.get('/destroy',(req,res)=>{
    req.session.destroy();
    res.send("Session Destroyed");
});

app.listen(3000,()=>{
    console.log("Server running");
});