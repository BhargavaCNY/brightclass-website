import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import classes from '../Topbar.module.css';

const SidebarMenuItem = ({ itemName, clickHandle, hide }) => {
  return (
    <div className={classes.mobileMenuItem} onClick={clickHandle}>
      <div className={classes.sidebarMainText}>{itemName}</div>
      {/* {!hide && <ChevronRightIcon />} */}
    </div>
  );
};

export default SidebarMenuItem;
