import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Home from './Home';
import { useNavigate } from 'react-router'
import loginKey from '../assets/loginKey.png'
import './login.css'
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)

    const login = () => {
        const payload = users.find(user => user.username === username && user.password === password);

        if (payload) {
            dispatch({
                type: 'LOGIN',
                payload
            })
            alert('success')
            navigate('/home')
            // return <NavLink  to="/home"/>
        } else {
            alert('wrong credentials')
        }
    }

    return (
        <>
            <div class="content">
                <div class="flex-div">
                <div>
                    <form action='' className='login'>
                    <h1 style={{color:'#3d3d3d'}}>Sign In</h1>
                    <h4 style={{color:'#3d3d3d'}}>New User? <span style={{color:'blue'}}>Create an account</span></h4>

                        <input type='text' placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
                        <input type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
                        <span style={{display:'flex'}}><input style={{marginTop:'13px',marginRight:'10px'}} type='checkbox' /><p>Keep me sign in</p></span>
                        {/* <input type='button' placeholder='Login' onClick={login}/> */}
                        <button class="login" onClick={login}>Sign In</button>

                    </form>

                </div>

                    <div style={{marginTop:'1rem'}}>
                        <img src={loginKey} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login