import React from 'react';
import { MenuItemSubLabel } from './MenuItemSubLabel';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SidebarSubMenuItem = ({ text, clickHandler, show }) => {
  return (
    <div
      style={{
        padding: '11px 31px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      onClick={clickHandler}
    >
      <MenuItemSubLabel text={text} />
      {show && <ChevronRightIcon />}
    </div>
  );
};

export default SidebarSubMenuItem;
