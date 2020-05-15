import React from "react";
import { Card, Button } from "antd";
import { FEATURE_TYPES, FEATURE_KEYS } from "../../globals/config/constants";
import { CustomCard } from "../../globals/partials/atoms/CustomCard";
import ATM from "../../globals/assets/images/atm.png";
import MEDICAL from "../../globals/assets/images/medical.png";
import GROCERY from "../../globals/assets/images/grocery.png";
import { FEATURE } from "../../globals/config/urlMapping";

export const Homepage = (props) => {
  const { history } = props;
  return (
    <div>
      <div>
        <Button type="primary" block>
          CHOOSE YOUR LOCATION
        </Button>
        <br />
        <br />
        {FEATURE_TYPES.map((item) => {
          const name = item.name;
          const key = item.key;
          const icon = getIconSource(key);
          return (
            <CustomCard
              onClick={() => history.push(FEATURE)}
              key={key}
              icon={<img className="icon" src={icon} alt={key} />}
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
