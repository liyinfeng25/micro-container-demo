import React from 'react';
import Cookie from 'cookiejs'


function Login (props) {

  const handleLoginSuccess = () => {
    Cookie.set('token', 'liyinfeng')
  }

  return (
    <div className="home">
      <button onClick={handleLoginSuccess}>点击登录</button>
      
    </div>
  )
}

export default Login