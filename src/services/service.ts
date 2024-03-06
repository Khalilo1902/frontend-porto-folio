import  axios from "axios";
import {TUser} from "../interface";


const server_Mongo_Url = "https://portofolio-db.khalil-dev.me"


const userRegister = (user:TUser)=>{
    const url = `${server_Mongo_Url}/api/user/register`
    return axios.post(url,user)
}

const userLogin = (user:TUser)=>{
    const url = `${server_Mongo_Url}/api/user/login`
    return axios.post(url,user)
}

const verifyAccount = (token:string)=>{
    const url = `${server_Mongo_Url}/api/user/verify_account/${token}`
    return axios.get(url)
}

const userLogout = ()=>{
    const url = `${server_Mongo_Url}/api/user/logout`
    return axios.post(url)
}


export {
    userRegister,
    userLogin,
    verifyAccount,
    userLogout
}