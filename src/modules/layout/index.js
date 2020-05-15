import React from "react";
import { Layout } from "antd";
import RenderHeader from "./Header";
import ChiefRouter from "../../router";
import { RenderFooter } from "./Footer";

const { Content } = Layout;

export const GRLayout = (props) => {
  return (
    <Layout className="layout">
      <RenderHeader />
      <Content className="gr-layout-content">
        <ChiefRouter />
      </Content>
      <div className="layout-footer">
        <RenderFooter />
      </div>
    </Layout>
  );
};
