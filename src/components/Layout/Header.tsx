import * as React from "react";
import { Menu, Avatar, Layout, Dropdown } from "antd";
import { AuthContext } from "../AuthContext";
import { auth } from "src/firebase";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Layout.Header
      className="site-layout-background"
      style={{ padding: "0 24px", background: "white" }}
    >
      <Menu mode="horizontal">
        <Menu.Item key="1">
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <AuthContext.Consumer>
            {(user) =>
              user && (
                <Menu.SubMenu
                  key="SubMenu"
                  icon={<Avatar src={user.photoURL} />}
                  title={user.email}
                >
                  <Menu.Item>
                    <Link to="/account">Settings</Link>
                  </Menu.Item>
                  <Menu.Item danger onClick={auth.doSignOut}>
                    Logout
                  </Menu.Item>
                </Menu.SubMenu>
              )
            }
          </AuthContext.Consumer>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};
