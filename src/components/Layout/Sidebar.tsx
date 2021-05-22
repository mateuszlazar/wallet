import * as React from "react";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { SDrawer, SToolbar } from "./styled";
import { ROUTES } from "../../app/routes";

export const Sidebar = () => (
  <SDrawer variant="permanent" anchor="left">
    <SToolbar>Wallet Logo</SToolbar>
    <Divider />
    <List>
      {ROUTES.filter(({ path }) => ["/dashboard"].includes(path)).map(
        ({ name, path, Icon }) => (
          <ListItem component={Link} to={path} button key={name}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        )
      )}
    </List>
  </SDrawer>
);
