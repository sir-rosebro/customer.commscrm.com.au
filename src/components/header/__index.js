import React, { useEffect } from "react";

import {
  Row,
  Col,
  Badge,
  Dropdown,
  List,
  Breadcrumb,
  Avatar,
  Input,
} from "antd";

import {
  SearchOutlined,
  BellOutlined,
  WifiOutlined,
  CreditCardOutlined,
  ClockCircleOutlined,
  //UserOutlined,
  //DownOutlined
  //SettingOutlined
} from "@ant-design/icons";

import { NavLink } from "react-router-dom";
//import styled from "styled-components";
//import avtar from "/img/team-2.jpg";

// const ButtonContainer = styled.div`
//   .ant-btn-primary {
//     background-color: #1890ff;
//   }
//   .ant-btn-success {
//     background-color: #52c41a;
//   }
//   .ant-btn-yellow {
//     background-color: #fadb14;
//   }
//   .ant-btn-black {
//     background-color: #262626;
//     color: #fff;
//     border: 0px;
//     border-radius: 5px;
//   }
//   .ant-switch-active {
//     background-color: #1890ff;
//   }
// `;


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


function Header() {

  useEffect(() => window.scrollTo(0, 0));

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/">Pages</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
              {"Dashboard"}
              {name.replace("/", "")} 
            </Breadcrumb.Item>
          </Breadcrumb> 
          <div className="ant-page-header-heading">
            <span
              className="ant-page-header-heading-title"
              style={{ textTransform: "capitalize" }}
            >
              {"Dashboard"}
            </span>
          </div>
        </Col>
        <Col span={24} md={18} className="header-control">
          <Badge size="small" count={4}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                href="#pablo"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                {<BellOutlined />}
              </a>
            </Dropdown>
          </Badge>
          {/* <Button
            type="link"
            className="sidebar-toggler"
            onClick={() => onPress()}
          >
            {toggler}
          </Button> */}
          <Input
            className="header-search"
            placeholder="Type here..."
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
    </>
  );
}

export default Header;
