import React from "react";
import { Button } from "antd";
import axios from "axios";

export default function Home() {
  const ajax = () => {
    // axios.get("http://localhost:8000/posts").then(res=>{
    //   console.log(res.data)
    // })

    // axios.post("http://localhost:8000/posts", {
    //   id: "3",
    //   title: "new title",
    //   views: 200,
    // });

    // 更新 patch局部更新（不影响其它项目） | 而put是全部更新
    // axios.patch("http://localhost:8000/posts/1", {
    //   title: "111-修改",
    // });

    // 删除 delete
    // axios.delete("http://localhost:8000/posts/1")

    // _embed 联合查询
    // axios.get("http://localhost:8000/posts?_embed=comments").then(res=>{
    //   console.log(res.data)
    // })

    // axios.get("http://localhost:8000/comments?_expand=post").then(res=>{
    //   console.log(res.data)
    // })

  };
  return (
    <div>
      <Button type="default" size="small" onClick={ajax}>
        Home
      </Button>
    </div>
  );
}
