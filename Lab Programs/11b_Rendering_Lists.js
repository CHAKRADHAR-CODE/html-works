// 11) b. Write a program for rendering lists.

import React from "react";
function App(){
    const items = ["APPLE","BANANA","MANGO"];
    return(
        <div>
            <h2> List Rendering </h2>
            <ul>
                {items.map((item,index)=>(
                    <li key = {index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default App;