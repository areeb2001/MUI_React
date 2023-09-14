import React from 'react'
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import BasicModal from "../components/Modal";
import BasicDatePicker from "../components/DatePicker";

const Footer = () => {
    const [value, setValue] = React.useState(0);
  return (
    <div>
        <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </div>
  )
}

export default Footer