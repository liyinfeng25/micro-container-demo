import React from 'react';
import ReactDOM from 'react-dom';
import Cookie from 'cookiejs'
import queryString from 'query-string';
import actions from './shared/action'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const QS = queryString.parse(window.location.search);
QS.token && Cookie.set('token', 'liyinfeng')

const isLogin = Cookie.get('token');

// 注册一个观察者函数
actions.onGlobalStateChange((state, prevState) => {
  // state: 变更后的状态; prevState: 变更前的状态
  console.log("主应用观察者：token 改变前的值为 ", prevState.token);
  console.log("主应用观察者：登录状态发生改变，改变后的 token 的值为 ", state.token);
});

isLogin && actions.setGlobalState({token: 'liyinfeng'})

console.log('登录态===>', isLogin);

if (isLogin) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
