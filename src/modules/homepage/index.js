import React,{ useState, useEffect } from "react";
import { Card, Button,Modal, InputNumber, Row, Col } from "antd";
import { FEATURE_TYPES, FEATURE_KEYS } from "../../globals/config/constants";
import { CustomCard } from "../../globals/partials/atoms/CustomCard";
import ATM from "../../globals/assets/images/atm.png";
import MEDICAL from "../../globals/assets/images/medical.png";
import GROCERY from "../../globals/assets/images/grocery.png";
import { FEATURE } from "../../globals/config/urlMapping";

export const Homepage = (props) => {
  const [pincode, setPincode] = useState(0);
  const [locationClicked, setLocationClicked] = useState(false);

  const { history } = props;
  return (
    <div>
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
        {FEATURE_TYPES.map((item) => {
          const name = item.name;
          const key = item.key;
          const icon = getIconSource(key);
          const isActive = item.active;
          return (
            <CustomCard
              onClick={() => history.push(FEATURE)}
              key={key}
              icon={<img className="icon" src={icon} alt={key} />}
              disabled={!isActive}
            >
              {name}
            </CustomCard>
          );
        })}
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
  );
};

const getIconSource = (key) => {
  console.log(key, FEATURE_KEYS.medical);
  switch (key) {
    case FEATURE_KEYS.atm:
      return ATM;
    case FEATURE_KEYS.medical:
      return MEDICAL;
    case FEATURE_KEYS.grocery:
      return GROCERY;
    default:
      return null;
  }
};
