import * as React from "react";
import { withRouter } from "react-router-dom";
import { SLayoutContainer, SToolbar } from "./styled";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

const Layout: React.FC<any> = ({ children, location }) => {
  const useAppLayout = location.pathname !== "/";

  return useAppLayout ? (
    <SLayoutContainer>
      <Navbar />
      <Sidebar />
      <main>
        <SToolbar />
        {children}
      </main>
    </SLayoutContainer>
  ) : (
    children
  );
};

export default withRouter(Layout);
