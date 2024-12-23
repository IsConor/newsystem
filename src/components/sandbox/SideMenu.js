import React, { useEffect, useState } from "react";
import { Layout, Menu, Switch } from "antd";
import '../../App.css'
import { withRouter } from "react-router";
import {
  LockOutlined,
  UserOutlined,
  HomeOutlined,
  IdcardOutlined,
  FolderOpenOutlined,
  ApartmentOutlined,
  SolutionOutlined,
  BarsOutlined,
  FolderAddOutlined,
  FolderViewOutlined,
  SignatureOutlined,
  SisternodeOutlined,
  ShareAltOutlined,
  WifiOutlined,
  SendOutlined,
  LoadingOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import "./index.css";
import axios from "axios";

const { Sider } = Layout;

// 菜单图标
const iconList = {
  "/home": <HomeOutlined />,
  "/user-manage": <IdcardOutlined />,
  "/user-manage/list": <SolutionOutlined />,
  "/right-manage": <LockOutlined />,
  "/right-manage/role/list": <UserOutlined />,
  "/right-manage/right/list": <ApartmentOutlined />,
  "/news-manage": <BarsOutlined />,
  "/news-manage/add": <FolderAddOutlined />,
  "/news-manage/ready": <FolderViewOutlined />,
  "/news-manage/class": <FolderOpenOutlined />,
  "/audit-manage": <ShareAltOutlined />,
  "/audit-manage/news": <SignatureOutlined />,
  "/audit-manage/list": <SisternodeOutlined />,
  "/publish-manage": <WifiOutlined />,
  "/publish-manage/ready": <LoadingOutlined />,
  "/publish-manage/send": <SendOutlined />,
  "/publish-manage/del": <EyeInvisibleOutlined />,
};

function SideMenu(props) {
  // 当前主题为深色主题
  const [theme, setTheme] = useState("dark");
  // 点击切换主题颜色事件
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  const [menuList, setMenuList] = useState([]);

  // 组件挂载成功hooks,获取menu菜单
  useEffect(() => {
    axios.get("http://localhost:8000/rights?_embed=children").then((res) => {
      setMenuList(renderMenu(res.data));
    });
  }, []);

  // 分类menu数据哪些展示到菜单
  const checkPagePermission = (item) => {
    return item.pagepermisson === 1;
  };

  // 处理menu数据，判断是否有子菜单
  const renderMenu = (menuList) => {
    return menuList.map((item) => {
      let newMenu;
      // 如果有childred并且children的内容不为空
      if (item.children && item.children?.length > 0) {
        newMenu = {
          id: item.id,
          key: item.key,
          label: item.label,
          pagepermisson: item.pagepermisson,
          grade: item.grade,
          icon: iconList[item.key],
          children: renderMenu(item.children),
        };
      }
      // 如果没有children
      else {
        // 筛选展示在左侧menu菜单中的数据
        if (checkPagePermission(item)) {
          newMenu = {
            id: item.id,
            key: item.key,
            label: item.label,
            // pagepermisson: item.pagepermisson,
            grade: item.grade,
            icon: iconList[item.key],
          };
        }
        // 不展示到menu中的数据
        else {
        }
      }
      return newMenu;
    });
  };

  return (
    <Sider trigger={null} collapsible theme={theme}>
      <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
        <div className="demo-logo-vertical">
          <span className="title">PUWEI 云控 &nbsp;</span>
          <Switch
            checked={theme === "dark"}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </div>
        <div style={{flex:1,overflow:"auto"}}>
          <Menu
            theme={theme}
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={menuList}
            onClick={(item) => {
              // 点击菜单跳转路由
              props.history.push(item.key);
            }}
          />
        </div>
      </div>
    </Sider>
  );
}
// 通过withRouter将SideMenu组件包裹进Route组件
export default withRouter(SideMenu);
