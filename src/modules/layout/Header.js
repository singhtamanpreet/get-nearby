import React from "react";
import { withRouter } from "react-router-dom";
import LOGO from "../../globals/assets/images/logo.png";
import { Menu, Dropdown, Avatar, Input } from "antd";

import { UserOutlined } from "@ant-design/icons";
import { FEATURE } from "../../globals/config/urlMapping";

const RenderHeader = (props) => {
  const { history } = props;

  const handleSearch = (value) => {
    if (value)
      history.push(
        FEATURE.replace(":feature", "search").replace(":param", value)
      );
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={() => {}}>Profile</Menu.Item>
    </Menu>
  );
  return (
    <div className="gr-layout-header">
      <div style={{ marginLeft: "10px" }}>
        <img className="logo" src={LOGO} alt="LOGO" />
      </div>
      <Input.Group compact style={{ display: "inline", width: "180px" }}>
        <Input.Search onSearch={handleSearch} placeholder="Search" />
      </Input.Group>
      <div style={{ marginRight: "10px" }}>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Avatar icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </div>
  );
};

export default withRouter(RenderHeader);
