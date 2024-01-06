import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuthenticated}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem('user_token', data.token);
        navigate("/");
      } else {
        console.error('Login failed');
      }
    });
  };

  return (
    <div>
      <h2 className=" font-bold text-[30px] text-center  mt-6 " >Login page </h2>
      <div className='flex  flex-col w-[400px] ml-[40vw] mt-7 ' >
      <div className='flex flex-col' >
        <label>Your Username</label>
        <input
         className="mb-4 flex-1 modal1-ip-field w-full text-[16px] py-[15px] px-[30px] border border-gray-500 outline-none rounded-[15px] "
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='flex flex-col ' >
        <label>Password</label>
        <input
         className="mb-4 flex-1 modal1-ip-field w-full text-[16px] py-[15px] px-[30px] border border-gray-500 outline-none rounded-[15px] "
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className=" py-[12px] px-[15px] border-[2px] border-blue-400 rounded-[20px] bg-green-600 text-white  "  onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
