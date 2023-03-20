import * as React from "react";

import { Button, Menu, MenuItem } from "@mui/material";
import { alpha, styled, useThemeProps } from "@mui/material/styles";
import { bindMenu, bindTrigger } from "material-ui-popup-state/hooks";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ImageSearchbar from "../Searchbar/ImageSearchbar";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PopupState from "material-ui-popup-state";
import SearchIcon from "@mui/icons-material/Search";
import Toolbar from "@mui/material/Toolbar";
import TopbarMenu from "./TopBarMenu";
import Typography from "@mui/material/Typography";

const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 2 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            INTEREST
          </Typography>
          <ImageSearchbar />
          <TopbarMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
