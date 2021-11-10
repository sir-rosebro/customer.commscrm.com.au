import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Button,
    Card, 
    Col, 
    Row
} from 'antd';

import { 
    CheckCircleTwoTone,
    RightOutlined,
    HomeOutlined,
    ArrowUpOutlined,
    ShoppingOutlined,
    MobileOutlined
} from '@ant-design/icons';

import DataUsageChart from '../../components/chart/DataUsageChart';
import './myAccount.scss';
import Layout from '../../layouts/layout';

const SideMenuButtonGroup = () => (
    <div className="sideMenuButtonGroup">
        <Link to="/"> <ArrowUpOutlined /> Topup</Link>
        <Link to="/">  <ShoppingOutlined /> Shop</Link>
        <Link to="/">  <MobileOutlined />Devices </Link> 
    </div>
);

const customerSideMenuOptionsdata = [
    { text:'Pay my bill', to:'/' },
    { text:'Lodge a fault', to:'/' },
    { text:'My orders', to:'/' },
    { text:'FAQs', to:'/' },
    { text:'Known Outage', to:'/' },
];
const CustomerSignedUpService = () => (
    <>
        <div className="customerSignedUpService">
            <div>
                <HomeOutlined /> {' '}
                <spna>5G Broadband Home</spna>
            </div>
            <RightOutlined/>
        </div>
        <p style={{float:'right', marginTop:'10px'}}>118 GB data left from 1190GB</p>
    </>
);

const CustomerSideMenuOptions = () => customerSideMenuOptionsdata.map ( (option, index) => (
                    <div className="link" key={index}>
                        <Link to={option.to}> {option.text} </Link> 
                        <RightOutlined style={{ color:'black', fontSize:'12px'}}/>
                    </div>
                ));

const DataUsageChartInfo = () => (
    <div className="dataUsageChartInfo">
        <div style={{borderBottom:'1px solid #5ce472'}}>
            <h1>173.3GB</h1>
            <span>Used of 899GB</span>
        </div> 
        <div>
            <h1>18 Days</h1>
            <span>to go</span>
        </div> 
    </div>
);
const CustomerInfoCard = () => (
                <div className="customerInfoCard">
                    <h3>SAROJ BHATTARAI</h3>
                    <p>Account Number: 62328916556</p>
                    <p>U 9/42 Wentworth Rd</p>
                    <p>Burwood NSW 2134</p>
                    <Link to="/">My Profile</Link>
                </div>
            );

const PaymentSummaryCard = () => (
                <div className="paymentSummary">
                    <h3>Payment Summary</h3>
                    <p> <CheckCircleTwoTone twoToneColor="#52c41a" /> {'  '}All up to date</p>
                    <p> <CheckCircleTwoTone twoToneColor="#52c41a" /> {'  '}Automatic Payment: Active</p>
                    <Button>Manage Payment Methods</Button>
                </div>
            );  

const MyAccount = () => {
    return (
        <Layout>
            <section className="myAccount">
                <div className="container">
                    <Row gutter={[24, 0]}>
                        <Col xs={24} xl={18} className="mb-24">
                            <Card style={{ width: '100%' }}>
                                { CustomerInfoCard() } 
                            </Card>
                            <Card style={{width: '100%', backgroundColor:'#F6FDF7', marginTop:'30px'}}>
                                <div className="dataUsageCard">
                                    { <DataUsageChart /> }
                                    { DataUsageChartInfo()}
                                </div>
                            </Card>
                            <Card style={{width: '100%', backgroundColor:'#F6FDF7'}}>
                               { CustomerSignedUpService() }
                            </Card>
                        </Col>
                        <Col span={24} md={8} xl={6} className="mb-24">
                            <Card style={{ width: '100%', backgroundColor:'#DAF6DD' }}>
                                { PaymentSummaryCard() }
                            </Card>
                            <div style={{ width: '100%', backgroundColor:''}}>
                                <div className="customerSideMenuOptions">
                                    { CustomerSideMenuOptions()}
                                    <Card style={{ width: '100%', border: 'none', backgroundColor:'#51CB65', margin:'20px 0' }}>
                                        { SideMenuButtonGroup() }
                                    </Card>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </Layout>
    );
};

export default MyAccount;
