import * as React from "react";
import { withRouter } from "react-router-dom";
import { Layout } from "antd";
import { Header } from "./Header";

const LayoutComponent: React.FC<any> = ({ location, children }) => {
  const useAppLayout = location.pathname !== "/";

  return useAppLayout ? (
    <Layout style={{ minHeight: "100vh" }} className="site-layout">
      <Header />
      <Layout.Content>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          {children}
        </div>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: "center" }}>
        Wallet © 2021
      </Layout.Footer>
    </Layout>
  ) : (
    children
  );
};

export default withRouter(LayoutComponent);
