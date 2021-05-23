import * as React from "react";
import Divider from "@material-ui/core/Divider";
import { NavLink } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Dashboard } from "@material-ui/icons";
import { SDrawer, SToolbar } from "./styled";

export const Sidebar = () => (
  <SDrawer variant="permanent" anchor="left">
    <SToolbar>Wallet Logo</SToolbar>
    <Divider />
    <List>
      <ListItem
        component={NavLink}
        to={"/dashboard"}
        activeClassName={"Mui-selected"}
        button
      >
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary={"Dashboard"} />
      </ListItem>
      <ListItem
        component={NavLink}
        to={"/portfolio"}
        activeClassName={"Mui-selected"}
        button
      >
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary={"Portfolio"} />
      </ListItem>
    </List>
  </SDrawer>
);
