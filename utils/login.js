import fetch from 'node-fetch';

const login = async ({userName, password}) => {

    const options = {
        method: 'POST',
        body: JSON.stringify({userName, password}),
        headers: {
            'Content-Type':'application/json',
            'Accept':'text'
    }
    };
    const apiResponse = await fetch('http://34.145.101.133/login',options);
    const loginResponse = await apiResponse.text();

    return loginResponse;
}

export {login};