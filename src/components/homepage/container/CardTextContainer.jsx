import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './CardTextContainer.module.css';

const CardTextContainer = ({
  title,
  pera,
  peraStyle,
  titleStyle,
  date,
  hide,
  clickHandler,
  dateStyle,
}) => {
  return (
    <div className={classes.cardContent}>
      {date && (
        <div className={dateStyle ? dateStyle : classes.cardDate}>{date}</div>
      )}
      <div className={titleStyle ? titleStyle : classes.cardTitle}>{title}</div>
      {pera && (
        <div className={peraStyle ? peraStyle : classes.cardPara}>{pera}</div>
      )}

      {!hide && (
        // <Button className={classes.cardButton} onClick={clickHandler}>
        //   Learn More
        // </Button>
        <Button variant="outlined" className={classes.twoD_Button}>
          Sign up
        </Button>
      )}
    </div>
  );
};

export default CardTextContainer;
