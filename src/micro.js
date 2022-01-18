/**
 * 主应用内注册微应用
 */

 import NProgress from "nprogress";
 import "nprogress/nprogress.css";

import { 
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
  // setDefaultMountApp,
  // removeGlobalUncaughtErrorHandler
} from 'qiankun'

// 注册子应用列表
const apps = [
  {
    name: 'ReactCreatereactappDemo',  // 微应用名称 - 具有唯一性
    entry: 'http://localhost:3001', // 微应用入口 - 通过该地址加载微应用
    container: '#micro', // 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
    activeRule: '/react_createreactapp_demo' // 微应用触发的路由规则 - 触发路由规则后将加载该微应用
  },
  {
    name: 'VueCliDemo', 
    entry: 'http://localhost:3002', 
    container: '#micro', 
    activeRule: '/vue_cli_demo'
  }
]

// 参数1：微应用注册信息
// 参数2：全局生命周期钩子
registerMicroApps(apps, {
  // 加载前
  beforeLoad: (app) => {
    // 加载微应用前，加载进度条
    NProgress.start();
    console.log("before load", app.name);
    return Promise.resolve();
  },
  // 挂载后
  afterMount: (app) => {
    NProgress.done();
    console.log("after mount", app.name);
    return Promise.resolve();
  }
})

// 添加全局的未捕获异常处理器
addGlobalUncaughtErrorHandler((e) => {
  console.error('子应用加载异常 ==>', e);
})

// 移除全局的未捕获异常处理器
// removeGlobalUncaughtErrorHandler((e) => {
//   console.error('移除子应用加载异常 ==>', e);
// })

// 设置自动进入微应用
// setDefaultMountApp('/vue_cli_demo');

// 导出 qiankun 启动函数
export default start;
