import { Layout, Row, Col } from "antd";
import { HeartFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FacebookFilled, InstagramFilled, TwitterCircleFilled } from "@ant-design/icons";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ background: "#0A0A0A", color: "white" }}>
      <div style={{ margin: "0 auto", padding: "24px 20px" }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <div>
              <Link to="/">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  <img
                    src="https://www.svgrepo.com/show/452102/slack.svg"
                    alt="AI Logo"
                    width="64"
                    height="64"
                    style={{ width: "64px" }}
                  />
                  <span style={{ color: "white", marginLeft: "10px" }}>
                    Relief Donation
                  </span>
                </div>
              </Link>
              <div
                style={{
                  maxWidth: "320px",
                  paddingRight: "16px",
                  fontSize: "16px",
                  color: "#CCCCCC",
                }}
              >
                Disaster Relief Donation Platform is committed to helping those affected by disasters. We provide a platform for people to donate and support relief efforts. Together, we can make a difference in the lives of those in need
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Link
                  to=""
                  target="_blank"
                  style={{
                    color: "#CCCCCC",
                    marginRight: "8px",
                    cursor: "pointer",
                  }}
                >
                  <span className="sr-only">Linkedin</span>
                </Link>
                <a
                  href=""
                  target="_blank"
                  style={{ color: "#CCCCCC", cursor: "pointer" }}
                >
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>
              Contact Us
            </h3>
            <ul role="list" style={{ marginTop: "10px", paddingLeft: "0", listStyle: "none" }}>
              <li>
                <a
                  href="mailto:sohagislam@gmail.com"
                  style={{
                    fontSize: "16px",
                    color: "#CCCCCC",
                    textDecoration: "none",
                  }}
                >
                  Email: sohagislam@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:01302176538"
                  style={{
                    fontSize: "16px",
                    color: "#CCCCCC",
                    textDecoration: "none",
                  }}
                >
                  Phone: 01302176538
                </a>
              </li>
              <li>
                <span
                  style={{
                    fontSize: "16px",
                    color: "#CCCCCC",
                  }}
                >
                  Address: Dhanmondi-32, Dhaka
                </span>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>
              Social Media
            </h3>
            <ul role="list" style={{ marginTop: "10px", listStyle: "none" }}>
              <li>
                <a
                  href="https://www.facebook.com"
                  style={{
                    fontSize: "16px",
                    color: "#CCCCCC",
                    textDecoration: "none",
                  }}
                >
                  <FacebookFilled style={{ fontSize: '30px' }} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  style={{
                    fontSize: "16px",
                    color: "#CCCCCC",
                    textDecoration: "none",
                  }}
                >
                  <InstagramFilled style={{ fontSize: '30px', marginTop: '10px' }} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  style={{
                    fontSize: "16px",
                    color: "#CCCCCC",
                    textDecoration: "none",
                  }}
                >
                  <TwitterCircleFilled style={{ fontSize: '30px', marginTop: '10px' }} />
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>
              Resources
            </h3>
            <ul role="list" style={{ marginTop: "10px", paddingLeft: "0", listStyle: "none" }}>
              <li>
                <Link
                  to='/donations'
                  style={{
                    fontSize: "16px",
                    color: "#CCCCCC",
                    textDecoration: "none",
                  }}
                >
                  Donations
                </Link>
              </li>
              <li>
                <Link
                  to='/leaderboard'
                  style={{
                    fontSize: "16px",
                    color: "#CCCCCC",
                    textDecoration: "none",
                  }}
                >
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link
                  to='/community'
                  style={{
                    fontSize: "16px",
                    color: "#CCCCCC",
                    textDecoration: "none",
                  }}
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to='/about-us'
                  style={{
                    fontSize: "16px",
                    color: "#CCCCCC",
                    textDecoration: "none",
                  }}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row
          style={{
            marginTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.3)",
            paddingTop: "16px",
          }}
        >
          <Col span={24}>
            <div
              style={{ fontSize: "16px", textAlign: "center", color: "white" }}
            >
              Copyright © 2024 . Crafted with{" "}
              <span style={{ color: "#CCCCCC" }}>
                <HeartFilled />
              </span>{" "}
              by Sohag Islam at{" "}
              <a rel="noopener" href="/" style={{ color: "#CCCCCC" }}>
              Disaster Relief Donation.
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default FooterComponent;
