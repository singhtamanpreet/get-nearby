import React from "react";
import { Card, Row, Col } from "antd";

export const CustomCard = (props) => {
  const { icon, children } = props;
  const span = icon ? 20 : 24;
  return (
    <Card className="custom-card" onClick={props.onClick}>
      <Row type="flex" align="middle">
        <Col span={span}>{children}</Col>
        {icon && <Col span={4}>{icon}</Col>}
      </Row>
    </Card>
  );
};
