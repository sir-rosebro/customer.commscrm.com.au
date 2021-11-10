import React from "react";
import { Menu } from "antd";
import { Link, NavLink, useLocation } from "react-router-dom";


import { TableOutlined, UserOutlined } from "@ant-design/icons";

function Sidenav() {
  const color='52C41A';
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  return (
    <>
      <div className="brand">
        <Link to="/profile" style={{color:"inherit"}}>
          <img src="/img/team-2.jpg" alt="" />
          <span>Saroj Bhattarai</span>
        </Link>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/dashboard">
            <span
              className="icon"
              style={{
                background: page === "dashboard" ? color : "",
              }}
            >
              <TableOutlined />
            </span>
            <span className="label">Dashboard</span>
          </NavLink>
        </Menu.Item>


        <Menu.Item key="6">
          <NavLink to="/log-out">
            <span
              className="icon"
              style={{
                background: page === "log-out" ? color : "",
              }}
            >
              <UserOutlined />
            </span>
            <span className="label">Logout</span>
          </NavLink>
        </Menu.Item>
        
      </Menu>
    </>
  );
}

export default Sidenav;
