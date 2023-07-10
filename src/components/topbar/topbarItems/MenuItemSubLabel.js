import React from 'react';
import classes from '../topbarBirdai.module.css';

export const MenuItemSubLabel = ({ text, clickHandler }) => {
  return (
    <div className={classes.menuItemSubLabel} onClick={clickHandler}>
      {text}
    </div>
  );
};
