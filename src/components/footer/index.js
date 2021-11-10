import React from "react";
import { Layout, Row, Col } from "antd";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ borderTop: "1px solid #5ce472", backgroundColor:"#ffffff" }}>
      <Row className="just">
        <Col xs={24} md={12} lg={12}>
          <div className="copyright">
            © 2021, 
            <a href="#pablo" className="font-weight-bold" target="_blank">
              Saroj Bhattarai
            </a>
            for a better web.
          </div>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <div className="footer-menu">
            <ul>
              <li className="nav-item">
                <a
                  href="#pablo"
                  className="nav-link text-muted"
                  target="_blank"
                >
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#pablo"
                  className="nav-link text-muted"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#pablo"
                  className="nav-link text-muted"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#pablo"
                  className="nav-link pe-0 text-muted"
                  target="_blank"
                >
                  Feedback & Complaints
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;
