import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import style from './style.css';
import { Row, Col } from 'antd';
import Holidays from './holidays';

const { Header, Content, Footer } = Layout;

const Tampilan = () => {
    return (
        <Layout className="layout">
            <Header>
                <Menu theme="dark" mode="horizontal">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Kelompok 22</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}></div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}></div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}></div>
                        </Col>
                    </Row>
                </Menu>

            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Praktikum RSBK</Breadcrumb.Item>
                    <Breadcrumb.Item>Modul 5</Breadcrumb.Item>
                    <Breadcrumb.Item>Tugas</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <div className="Components">
                        <div class="container">
                            <h2>Holidays in 2019. Not Relevant, Right?</h2>
                            <br />
                            <Holidays/>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
};

export default Tampilan;