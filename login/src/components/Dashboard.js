import React, {useEffect, useState} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


const Dashboard = () => {

    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        refreshToken();
        // getUsers();
    }, []);

    const refreshToken = async() => {
        const cef = {
            headers : {
                Cookie: {
                    refreshToken: refreshToken
                }
            }
        }
        console.log(cef)
        try {
            const response = await axios.get('https://jwt-mov-cef.herokuapp.com/api/v1/refresh');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken)

            console.log(decoded)
        } catch (error) {
            
        }
    }

    // const axiosJWT = axios.create();

    // axiosJWT.interceptors.request.use(async (config) => {
    //     const currentDate = new Date();
    //     if (expire * 1000 < currentDate.getTime()) {
    //         const response = localStorage.getItem('token');
    //         config.headers.Authorization = `Bearer ${response}`;
    //         setToken(response);
    //         const decoded = jwt_decode(response);
    //         setName(response.username);
    //         console.log(response)
    //         setExpire(decoded.exp);
    //     }
    //     return config;
    // }, (error) => {
    //     return Promise.reject(error);
    // });

    // const getUsers = async () => {
    //     const response = await axiosJWT.get('https://jwt-mov-cef.herokuapp.com/api/v1/user/users', {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     });
    //     setUsers(response.data);
    // }

    return ( 
        <div className='w-full h-screen'>
            <nav className='bg-cyan-500 h-24 w-full flex flex-row justify-between px-8 items-center fontfa text-white bold '>
                <h1 className='fontfa text-4xl'>Portfolio</h1>
                <ul className='flex flex-row space-x-12 pr-12 cursor-pointer'>
                    <li className='hover:text-slate-200 text-xl'>Home</li>
                    <li className='hover:text-slate-200 text-xl'>Skills</li>
                    <li className='hover:text-slate-200 text-xl'>Contact</li>
                </ul>
            </nav>

            <h1 className='fontfa text-2xl mt-8 ml-8'> Hello <span className='text-cyan-500'>{name}</span> </h1>
            <h1 className='fontfa text-2xl mt-8 ml-8'> Welcome to your portfolio site.</h1>
        </div>
    )
}

export default Dashboard