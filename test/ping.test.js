import  fetch  from 'node-fetch';


it ('Should respond pong', async () =>{
    const answer = await fetch('http://34.145.101.133/api/ping').then(res => res.json())
    console.log(answer);
    
});