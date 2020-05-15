import React from "react";
import { Layout } from "antd";
import { RenderHeader } from "./Header";
import { ChiefRouter } from "../../router";
import { RenderFooter } from "./Footer";

const { Content } = Layout;

export const GRLayout = (props) => {
  return (
    <div>
      <Layout className="layout">
        <RenderHeader />
        <Content>
          <ChiefRouter />
          <div className="layout-footer">
            <RenderFooter />
          </div>
        </Content>
      </Layout>
    </div>
  );
};
