import React from 'react';
import CardTextContainer from './CardTextContainer';
import classes from './ProductCard.module.css';

const STATIC_SERVER = 'https://birdai-website.s3.ap-south-1.amazonaws.com';

const ProductCard = ({
  img,
  title,
  pera,
  peraStyle,
  titleStyle,
  clickHandler,
}) => {
  return (
    <div className={classes.ProductCardMain}>
      <div style={{ padding: '9px 34px 0' }}>
        <img src={img} alt="img" style={{ width: '100%' }} />
      </div>
      <CardTextContainer
        title={title}
        pera={pera}
        peraStyle={peraStyle}
        titleStyle={titleStyle}
        clickHandler={clickHandler}
      />
    </div>
  );
};

export default ProductCard;
