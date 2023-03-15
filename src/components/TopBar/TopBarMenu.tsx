import { IconButton, Menu, MenuItem } from "@mui/material";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

const TopbarMenu = () => {
  const { handleLogOut } = useContext(UserContext);
  const handleClickLogOut = (close: () => void) => {
    handleLogOut();
    close();
  };

  return (
    <PopupState variant="popover">
      {(popupState) => (
        <>
          <IconButton color="inherit" {...bindTrigger(popupState)}>
            <MoreVertIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={() => handleClickLogOut(popupState.close)}>
              Logout
            </MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
};

export default TopbarMenu;
