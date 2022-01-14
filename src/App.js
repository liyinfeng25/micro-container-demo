import React, { Suspense } from "react";
import routers from "./router/index";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import startQiankun from './micro'

import 'antd/dist/antd.css';
import "./App.css";
const { Header, Content, Footer, Sider } = Layout;

// 
startQiankun()

function App() {
  const [menuCollapsed, setMenuCollapsed] = React.useState(false);

  return (
    <Router>

      <Layout>
        <Sider className="layout-sider"  trigger={null} collapsible collapsed={menuCollapsed}>
          <div className="logo">222</div>
          <Menu
            theme="dark"
            mode="inline"
          >
            <Menu.Item key='home'>
              <Link to="/home">home</Link>
            </Menu.Item>
            <Menu.Item key='11'>
              <Link to="/react_createreactapp_demo/todo">react_createreactapp_demo 案例</Link>
            </Menu.Item>
            <Menu.Item key='22'>
              <Link to="/vue_cli_demo/">Vue Todo 案例</Link>
            </Menu.Item>
          </Menu>
          
          <div className="slider-btn" onClick={() => setMenuCollapsed(!menuCollapsed)}>
            <span><Icon type={menuCollapsed ? 'menu-unfold' : 'menu-fold'} /> </span>
          </div>
        </Sider>

        <Suspense fallback={<div>加载中</div>}>
          <Layout>
            <Header className="content-header">header</Header>
            <Content className="content-main">
              <div
                className="main-box"
                style={{ height: window.screen.height - 270 }}
              >
                <Switch>
                  {routers.map((item: any) => (
                    <Route
                      path={item.path}
                      key={item.path}
                      component={item.component}
                      exact
                    />
                  ))}
                </Switch>
                <div id="micro" style={{ width: '100%' }} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>底部说明</Footer>
          </Layout>
        </Suspense>
      </Layout>

    </Router>
  );
}

export default App;
