import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    Space,
    Badge,
    Dropdown,
    List,
    Avatar,
    Input 
} from 'antd';
import {
    InboxOutlined,
    BellOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    ClockCircleOutlined,
    WifiOutlined,
    CreditCardOutlined,
    SearchOutlined
  } from "@ant-design/icons";

import './header.scss';
import Logo from "../../assets/images/comms_logo.png";

const data = [
    {
      title: "New message from Sophie",
      description: <>{<ClockCircleOutlined />} 2 days ago</>,
  
      avatar: "/img/team-2.jpg",
    },
    {
      title: "New album by Travis Scott",
      description: <>{<ClockCircleOutlined />} 2 days ago</>,
  
      avatar: <Avatar shape="square">{<WifiOutlined />}</Avatar>,
    },
    {
      title: "Payment completed",
      description: <>{<ClockCircleOutlined />} 2 days ago</>,
      avatar: <Avatar shape="square">{<CreditCardOutlined />}</Avatar>,
    },
  ];

const menu = (
    <List
      min-width="100%"
      className="header-notifications-dropdown"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar shape="square" src={item.avatar} />}
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
  

const SubHeader = () =>  ( 
        <div className="subHeader">
            <Space>
                <NavLink to="/">Add a service </NavLink>
                <NavLink to="/">Bills and payments </NavLink>
                <NavLink to="/">Help & Support </NavLink>
            </Space>
        </div>
    );

const Header = () => {

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="left">
                        <img src={Logo}/>
                            <h1>AusComms</h1>
                    </div>
                    <div className="right">
                            <Space>
                                <Input
                                    size="small"
                                    className="header-search"
                                    placeholder="Type here..."
                                    prefix={<SearchOutlined />}
                                    style={{borderRadius:"5px"}}
                                />
                                <Badge size="small" count={4}>
                                    <Dropdown overlay={menu} trigger={["click"]}>
                                        <a
                                            href="#pablo"
                                            className="ant-dropdown-link"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            {<BellOutlined className="navlink_icon" rotate={11}/>}
                                        </a>
                                    </Dropdown>
                                </Badge>
                                <NavLink to="/"><InboxOutlined className="navlink_icon" rotate={11}/></NavLink>
                                <NavLink to="/"><ShoppingCartOutlined className="navlink_icon"rotate={-11}/></NavLink>
                                <NavLink to="/"><UserOutlined className="navlink_icon"/></NavLink>
                            </Space>
                    </div> 
                </div>  
            </div>
            { SubHeader() }
        </>
    )
}

export default Header;
