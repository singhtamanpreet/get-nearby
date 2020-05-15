import React from "react";
import { Layout } from "antd";
import { RenderHeader } from "./Header";

const { Content } = Layout;

export const GRLayout = (props) => {
  return (
    <div>
      <Layout className="layout">
        <RenderHeader />
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content gr-layout-content">
            <div>Component</div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};
