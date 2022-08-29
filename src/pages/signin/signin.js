import React, {useRef, useEffect, useState}from 'react'
import S from './style.module.css'
import Img from '../../Assets/sign.jpg'

import { useHistory,Link} from 'react-router-dom'

import {TextField} from '@material-ui/core';


export default function Signin() {

    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const history = useHistory()

    useEffect(() => {
        if(localStorage.getItem('token') !== null){
           console.log('already signedin')
           history.push('/')
        }  
        }, [localStorage.getItem('token')])

    const signin = async() => {
        const requestOptions = {
            headers: { "accepts":"application/json" , 'Content-Type': 'application/json'},
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({ email:email, password:password})
        };
        let response = await fetch("/api/user/login",requestOptions)
        console.log(response)
        response = await response.json()
        console.log(response)
        localStorage.setItem("token",JSON.stringify(response))
        history.push('/')
    }

    return (
        <div className={S.signin}>
            
            <div className={S.container}>

            <div className={S.img_container}>
                <img src={Img} alt="" className={S.med_img}/>
            </div>
            <div className={S.sub_container}>
            <div className={S.title}>
                <h1>Sign in </h1>
            </div>
            <TextField
            id="standard-password-input"
            label="Email"
            type="text"
            value={email}
            autoComplete="current-password"
            onChange={(e)=>setemail(e.target.value)}/> 

            <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(e)=>setpassword(e.target.value)}/>

            <span onClick={signin}>submit</span>
                <div className={S.demo}>
                    <h4>For Demo</h4>
                    <p>Email: f123@gmail.com</p>
                    <p>Password: dex123</p>
                </div>
            </div>

            </div>
            <p className={S.signin_statement}>Don't have an account? <Link to='/signup'>sing up</Link></p>
        </div>
    )
}
