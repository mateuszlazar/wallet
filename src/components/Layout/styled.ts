import { styled } from "@material-ui/core/styles";
import {
  AppBar,
  Container,
  Drawer,
  Toolbar,
  Typography,
  Chip,
  Menu,
} from "@material-ui/core";

const drawerWidth = 240;

export const SLayoutContainer = styled("div")({
  display: "flex",
});

export const SMain = styled(Container)({
  width: "100%",
});

export const SToolbar = styled(Toolbar)({});

export const SAppBar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

export const SChip = styled(Chip)({
  margin: "8px 12px",
});

export const SMenu = styled(Menu)({
  "& .MuiMenu-list": {
    padding: 0,
  },
});

export const SDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
  },
});

export const STitle = styled(Typography)({
  flexGrow: 1,
});
