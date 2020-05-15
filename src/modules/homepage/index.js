import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Modal, InputNumber } from "antd";

export const Homepage = () => {
  const [pincode, setPincode] = useState(0);
  const [locationClicked, setLocationClicked] = useState(false);

  return (
    <div>
      <div style={{ margin: "0 50px" }}>
        <div className="site-layout-content gr-layout-content">
          <div>
            <Modal
              title="Enter your pincode"
              visible={locationClicked}
              onOk={() => setLocationClicked(false)}
              onCancel={() => setLocationClicked(false)}
              okText="Submit"
              cancelButtonProps={{ hidden: true }}
            >
              <InputNumber
                placeholder="560095"
                onClick={(event) => setPincode(event.target.value)}
                style={{width : '50%'}}
              />
            </Modal>
            <Button type="primary" block
              onClick={() => setLocationClicked(true)}
            >
              CHOOSE YOUR PINCODE
              </Button>
            <br />
            <br />
            <div>
              <Row className="main-row" gutter={[12, 12]}>
                <Col>
                  <Card hoverable sm={6} style={{ width: 150, height: 150 }}>
                    <p>Medical Stores</p>
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
