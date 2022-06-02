import  fetch  from 'node-fetch';
import assert from "assert";



it ('Should respond', async () =>{
    const response = await fetch('http://34.145.101.133');
    const text= await response.text();
    console.log("Token " + text);
    assert.equal(text,"Hello");
    
});