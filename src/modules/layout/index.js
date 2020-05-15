import React from "react";
import { Layout } from "antd";
import { RenderHeader } from "./Header";
import { Button } from "antd";
import { Card } from "antd";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { Typography } from "antd";

const { Text } = Typography;
const { Content, Footer } = Layout;

export const GRLayout = (props) => {
  return (
    <div>
      <Layout className="layout">
        <RenderHeader />
        <Content style={{ overflow: "auto", margin: "20px 0" }}>
          <div style={{ margin: "0 50px" }}>
            <div className="site-layout-content gr-layout-content">
              <div>
                <Button type="primary" block>
                  CHOOSE YOUR LOCATION
                </Button>
                <br />
                <br />
                <div>
                  <Row className="main-row" gutter={[12, 12]}>
                    <Col>
                      <Card
                        hoverable
                        sm={6}
                        style={{ width: 150, height: 150 }}
                      >
                        <p>Medical Stores</p>
                        <p>59 stores</p>
                      </Card>
                    </Col>
                    <Col>
                      <Card
                        hoverable
                        sm={6}
                        style={{ width: 150, height: 150 }}
                      >
                        <p>Medical Stores</p>
                        <p>9 stores</p>
                      </Card>
                    </Col>
                    <Col>
                      <Card
                        hoverable
                        sm={6}
                        style={{ width: 150, height: 150 }}
                      >
                        <p>Vegetable stores</p>
                        <p>19 stores</p>
                      </Card>
                    </Col>
                  </Row>
                </div>
                <br />
                <br />
                <Card
                  title="Precautions for COVID-19"
                  className="custom-card"
                  bordered={false}
                >
                  <p>Don’t go out until its really necessary</p>
                  <p>Wash your hands regularly with soap</p>
                  <p>Maintain distance from other</p>
                  <p>
                    Cover your face while going out, sneezing, coughing, etc
                  </p>
                  <p>Spread awareness</p>
                </Card>
              </div>
            </div>
          </div>
        </Content>
        <Footer style={{ alignItems: "center" }} className="layout-footer">
          <Row className="main-row">
            <Col sm={6} sm={12} xs={24}>
              <Text className="text-about"> © GetNearBy, 2020</Text>
            </Col>
            <Col sm={6} sm={12} xs={24}>
              <Link to="/"> Terms and Policies </Link>
            </Col>
            <Col sm={6} sm={12} xs={24}>
              <Link to="/"> FAQs </Link>
            </Col>
            <Col sm={6} sm={12} xs={24}>
              <Link to="/"> contact@GetNearBy.com </Link>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </div>
  );
};
