import React from "react";
import { Typography } from "antd";
const { Text } = Typography;

export const RenderFooter = () => {
  return (
    <Text style={{ color: "white" }} className="text-about">
      {" "}
      © GetNearBy, 2020
    </Text>
  );
};
