// 11) a. Write a program for conditional rendering.

import React from "react";
function App(){
    const isLogin = true;
    return(
        <div>
            <h2> Conditional Rendering </h2>
            {isLogin ? <p> Welcom User </p> : <p> Please login </p>}
        </div>
    );
}
export default App;