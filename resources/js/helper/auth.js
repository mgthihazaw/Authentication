import Axios from "axios";

export function login(credentials) {
    return new Promise((res ,rej) => {
        Axios.post('/api/auth/login',credentials)
        .then((response) => {
            res(response.data);
        })
        .catch(err => {
            rej("Wrong email or password");
        })
    })
}
export function getLocalUser(){
    const userObject =localStorage.getItem('user');
    if(!userObject){
       return null;
       
    }
    const userStr =JSON.parse(userObject)
    return userStr
}