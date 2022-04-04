import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState('');

    const Auth = async(e) => {
        e.preventDefault();
        try{
            await axios.post('https://jwt-mov-cef.herokuapp.com/api/v1/login', {
                "email": email,
                "password": password
            });
            window.location.replace("/home")
            } catch (error) {
            if (error.response.data) {
                    setMsg("Wrong email or password")
                // if(error.response.data.keyPattern.email === 1) {
                //     setMsg('email telah digunakan')

                // } else if(error.response.data.keyPattern.username === 1){
                //     setMsg('username telah digunakan')
                // }else {
                //     console.log(error.response.data.code)
                // }
                console.log(error.response.data)
            }
        }
    }

    return (
    <div className='bg-cyan-500 w-full h-screen flex justify-center items-center'>
        <div className='w-3/6 height h-3/6 bg-white rounded-lg flex flex-col justify-center items-center fontfa' >
            <h1 className='mb-4 bold text-3xl'>Login</h1>
            <p className='text-red-500'>{msg}</p>
            <form className='flex flex-col justify-center w-5/6 ' onSubmit={Auth}>
                <label className='text-lg bold text-cyan-500'> Email </label>
                <input type='email' placeholder='type your email' className='w-full outline-none border-2 border-cyan-500 p-2 rounded-lg mb-8 mt-2' required value={email} onChange={(e) => setEmail(e.target.value)}></input>

                <label className='text-lg bold text-cyan-500'> Password </label>
                <input type='password' placeholder='*********' className='w-full outline-none border-2 border-cyan-500 p-2 rounded-lg mb-12 mt-2' required value={password} onChange={(e) => setPassword(e.target.value)}></input>

                <button className='bg-cyan-500 p-4 rounded-lg text-white text-lg'>Login</button>
            </form>

            <div className='flex flex-row justify-center items-center mt-12'>
                <h1 className='mr-4'>Don't have an account?</h1>
                <Link to={"/register"}><h1 className='text-cyan-500 cursor-pointer'>Create an account</h1></Link>
            </div>
        </div>
    </div>
    )
}

export default Login