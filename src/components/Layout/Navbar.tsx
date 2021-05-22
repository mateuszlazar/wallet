import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import AccountCircle from "@material-ui/icons/AccountCircle";
import { Avatar, Divider, Toolbar, MenuItem } from "@material-ui/core";
import { SAppBar, STitle, SChip, SMenu } from "./styled";
import { auth } from "../../firebase";
import { AuthContext } from "../AuthContext";

export const Navbar = () => {
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
  const openAccountMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchor(event.currentTarget);
  const closeAccountMenu = () => setAnchor(null);

  return (
    <SAppBar position="fixed">
      <Toolbar>
        <STitle variant="h6">Responsive drawer</STitle>
        <AuthContext.Consumer>
          {(user) => (
            <>
              <IconButton
                aria-label="account of current user"
                color="inherit"
                onClick={openAccountMenu}
              >
                {user?.photoURL ? (
                  <Avatar src={user.photoURL} />
                ) : (
                  <AccountCircle />
                )}
              </IconButton>
              <SMenu
                anchorEl={anchor}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchor)}
                onClose={closeAccountMenu}
                keepMounted
              >
                {user && (
                  <SChip
                    label={user.email}
                    avatar={<Avatar src={user.photoURL} />}
                  />
                )}
                <Divider />
                <MenuItem
                  component={Link}
                  to={"/account"}
                  onClick={closeAccountMenu}
                >
                  My Account
                </MenuItem>
                <MenuItem onClick={auth.doSignOut}>Logout</MenuItem>
              </SMenu>
            </>
          )}
        </AuthContext.Consumer>
      </Toolbar>
    </SAppBar>
  );
};
