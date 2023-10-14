import React,{useState} from "react";
import axios from "axios";
import '../css/login.css'

const Register=(props)=>{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[errors,setErrors]=useState({})

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            email:email,
            password:password
        }
        //validations
        const validationErrors={}
        if(!formData.email.trim()) {
            validationErrors.email = "email is required"
        } else if(!/\S+@\S+\.\S+/.test(formData.email)){
            validationErrors.email = "email is not valid"
        }
        if(!formData.password.trim()) {
            validationErrors.password = "password is required"
        } else if(formData.password.length < 6){
            validationErrors.password = "password should be at least 6 char"
        }
        setErrors(validationErrors)

        if(Object.keys(validationErrors).length === 0) {
            alert("Form Submitted successfully")
        }
        axios.post('http://localhost:4455/api/user/login',formData)
        .then((response)=>{
            const res=response.data
            if(res.hasOwnProperty('errors')){
                alert(res.errors)
            }else{
                alert('login success')
                localStorage.setItem('token',res.token)
                props.history.push('/')
                props.handleAuth()
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    const handleChange=(e)=>{
         if(e.target.name ==='email')
        {
            setEmail(e.target.value)
        }
        else if(e.target.name ==='password')
        {
            setPassword(e.target.value)
        }
    }
    return(
        <section>
    <div class="login-box">
        <form action="">
            <h2>Login</h2>
            <div class="input-box">
                <span class="icon">
                    <ion-icon name="mail-outline"></ion-icon>
                </span>
                <input type="email" name="email" value={email} onChange={handleChange} required />
                <label>Email:</label>
            </div>
            <div class="input-box">
                <span class="icon">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                </span>
                <input type="password" name="password" value={password} onChange={handleChange} required />
                <label>Password:</label>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="">Forgot Password</a>
            </div>
            
            <button type="submit">Register</button>

            <div class="register-link">
                <p>Do have an account? <a href="/login">SignIn</a></p>
            </div>
        </form>
    </div>   
</section>
    )
}
export default Register