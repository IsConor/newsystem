import React from "react";
import SideMenu from "../../components/sandbox/SideMenu";
import TopHeader from "../../components/sandbox/TopHeader";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./home/Home";
import UserList from "./user-manage/UserList";
import RoleList from "./right-manage/RoleList";
import RightList from "./right-manage/RightList";
import NoPermission from "./nopermission/NoPermission";
import { Layout, theme } from "antd";
import './NewsSandBox.css'

const { Content } = Layout;

export default function NewsSandBox() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      {/* 左侧导航 */}
      <SideMenu></SideMenu>
      <Layout>
        {/* 顶部导航 */}
        <TopHeader></TopHeader>

        {/* 路由呈现的业务模块 */}
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* 二级路由匹配 */}
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/user-manage/list" component={UserList} />
            <Route path="/right-manage/role/list" component={RoleList} />
            <Route path="/right-manage/right/list" component={RightList} />

            <Redirect from="/" to="/home" exact />
            <Route path="*" component={NoPermission} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}