import { login } from "../utils/login.js";

it ('Should return a token', async () =>{
    const token = await login("jacobtapp12@byui.edu", "Kikagabe12$")
});