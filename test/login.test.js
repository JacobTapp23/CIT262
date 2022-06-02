import {login} from '../utils/login.js'

it ('Should get login token', async ()=>{
    const loginRequest = {
        userName:"jacobtapp12@byui.edu",
        password:"Kikagabe12$$"
    }

    const token = await login(loginRequest);
    console.log("Token", token);
})