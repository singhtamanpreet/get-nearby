import React from "react";
import { Card, Button, Row, Col } from "antd";

export const Homepage = () => {
  return (
    <div>
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
                  <Card hoverable sm={6} style={{ width: 150, height: 150 }}>
                    <p>Medical Stores</p>
                    <p>59 stores</p>
                  </Card>
                </Col>
                <Col>
                  <Card hoverable sm={6} style={{ width: 150, height: 150 }}>
                    <p>Medical Stores</p>
                    <p>9 stores</p>
                  </Card>
                </Col>
                <Col>
                  <Card hoverable sm={6} style={{ width: 150, height: 150 }}>
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
              <p>Cover your face while going out, sneezing, coughing, etc</p>
              <p>Spread awareness</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
