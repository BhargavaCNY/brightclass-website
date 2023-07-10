import React from 'react';
import classes from './CustomSlider.module.css';

const CustomSlider = ({ ImgUrls }) => {
  return (
    <div class={classes.wrapper}>
      <div class={classes.slider}>
        <div class={classes.slide}>
          {ImgUrls.map((imgUrl) => (
            <img src={imgUrl} />
          ))}
        </div>
        <div class={classes.slide}>
          {ImgUrls.map((imgUrl) => (
            <img src={imgUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
