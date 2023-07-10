import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import classes from './SectionOne.module.css';
import { Button, makeStyles, styled } from '@mui/material';
import { BASE_URL } from '@/components/common/constants';
import ThreeDbutton from './ThreeDbutton/ThreeDbutton';

// const STATIC_SERVER = 'https://birdai-website.s3.ap-south-1.amazonaws.com';

const SectionOne = ({
  bannerImgLink,
  mobileBannerImgLink,
  title,
  label,
  btnText,
  btnLink,
  titleCustomStyle,
}) => {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <section className={classes.section1}>
        {mobileView ? (
          // birghtClassMainPageBanner
          <img
            src={`${BASE_URL.STATIC_SERVER}/birghtClassMainPageMobileBanner.png`}
            alt="birdHubImage1"
            style={{ width: '100vw' }}
            // className={classes.canvasImg1Style}
          />
        ) : (
          <img
            src={`${BASE_URL.STATIC_SERVER}/birghtClassMainPageBanner.png`}
            alt="birdHubImage1"
            style={{ width: '100vw', maxWidth: '1440px' }}
            // className={classes.canvasImg1Style}
          />
        )}

        <div className={classes.section1TextContainer}>
          <h1
            className={
              titleCustomStyle ? titleCustomStyle : classes.birdHubLabel
            }
          >
            {'Extending the boundaries of learning'}
          </h1>
          <div className={classes.birdHubSmallText}>
            {
              'An AI adaptive platform which improve student learning performance, assist teachers with personalised lessons & streamlines the classrooms for blended learning.'
            }
          </div>
          <ThreeDbutton label="Book a Free Demo" />
        </div>
      </section>
    </>
  );
};

export default SectionOne;
