import React, { useState } from "react";
import { Layout, Menu, Switch } from "antd";
import { withRouter } from "react-router";
import {
  LockOutlined,
  UserOutlined,
  HomeOutlined,
  IdcardOutlined,
  FolderOpenOutlined,
  ApartmentOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import "./index.css";

const { Sider } = Layout;

function SideMenu(props) {
  // 当前主题为深色主题
  const [theme, setTheme] = useState("dark");
  // 点击切换主题颜色事件
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  // menu菜单结构
  const menuList = [
    {
      key: "/home",
      icon: <HomeOutlined />,
      label: "主页",
    },
    {
      key: "/user-manage",
      icon: <IdcardOutlined />,
      label: "员工管理",
      children: [
        {
          key: "/user-manage/list",
          label: "员工列表",
          icon: <SolutionOutlined />,
        },
      ],
    },
    {
      key: "3",
      icon: <LockOutlined />,
      label: "权限管理",
      children: [
        {
          key: "/right-manage/role/list",
          label: "角色列表",
          icon: <UserOutlined />,
        },
        {
          key: "/right-manage/right/list",
          label: "权限列表",
          icon: <ApartmentOutlined />,
        },
      ],
    },
    {
      key: "4",
      icon: <FolderOpenOutlined />,
      label: "草稿箱",
    },
  ];

  return (
    <Sider trigger={null} collapsible theme={theme}>
      <div className="demo-logo-vertical">
        <span className="title">PUWEI 云控 &nbsp;</span>
        <Switch
          checked={theme === "dark"}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </div>
      <Menu
        theme={theme}
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={menuList}
        onClick={(item)=>{
          // 点击菜单跳转路由
          props.history.push(item.key)
        }}
      />
    </Sider>
  );
}
// 通过withRouter将SideMenu组件包裹进Route组件
export default withRouter(SideMenu)