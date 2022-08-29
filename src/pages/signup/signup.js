import React, {useRef, useState} from 'react'
import S from './style.module.css'
import Img from '../../Assets/sign.jpg'

import { useHistory,Link} from 'react-router-dom'
import {TextField} from '@material-ui/core';

export default function Signup() {


    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const history = useHistory()

    const signup = async() => {
        if (name?.length > 3 && email?.length > 9 && password?.length > 4 ){
        const requestOptions = {
            headers: { "accepts":"application/json" , 'Content-Type': 'application/json'},
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({ name: name, email:email, password:password })
        };
        let response = await fetch("/api/user/register",requestOptions)
        console.log(response)
        history.push('/signin')
        }else{
            if (name?.length < 4)
                alert("Name must be of 4 letters")
            else if (email?.length < 4)
                alert("Enter correct gmail ID")
            else if (password?.length < 5)
                alert("Password must be of 5 letters")
        }
    } 

    return (
        <div className={S.signup}>
    
        <div className={S.container}>
        <div className={S.img_container}>
            <img src={Img} alt="" className={S.med_img}/>
        </div>

        <div className={S.sub_container}>
        <div className={S.title}>
            <h1>Sign up </h1>
        </div>
        <TextField      
        id="standard-password-input"
        label="Name"
        type="text"
        value={name}
        autoComplete="current-password"
        onChange={(e)=>setname(e.target.value)}/>

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

        <span onClick={signup}>submit</span>
        </div>
        </div>
        <p className={S.signin_statement}>Already have an account? <Link to='/signin'>sing in</Link></p>
    </div>
    )
}
