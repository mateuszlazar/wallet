import * as React from "react";
import { withRouter } from "react-router-dom";
import { SLayoutContainer, SToolbar, SMain } from "./styled";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

const Layout: React.FC<any> = ({ location, children }) => {
  const useAppLayout = location.pathname !== "/";

  return useAppLayout ? (
    <SLayoutContainer>
      <Navbar />
      <Sidebar />
      <SMain maxWidth={"lg"}>
        <SToolbar />
        {children}
      </SMain>
    </SLayoutContainer>
  ) : (
    children
  );
};

export default withRouter(Layout);
