import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../views/login/Login";
import NewsSandBox from "../views/newssandbox/NewsSandBox";

export default function IndexRouter() {
  return <div>
    <Router>
        <Switch>
            <Route path="/login" component={Login}  />
            {/* <Route path="/" component={NewsSandBox} /> */}
            {/* 路由拦截：判断本地存储是否存在token */}
            <Route path="/" render={()=>
              localStorage.getItem("token")?<NewsSandBox/>:<Login/>
            } />
        </Switch>
    </Router>
  </div>;
}