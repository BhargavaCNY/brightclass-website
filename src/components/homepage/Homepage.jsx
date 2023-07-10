'use client';
import React from 'react';
import SectionOne from './container/SectionOne';
import CustomSlider from '../common/slider/CustomSlider';
import { BASE_URL } from '../common/constants';
import classes from './Homepage.module.css';
import { ImgUrlsSet } from '../common/slider/sliderImages';
import VerticalDividerMiddle from './container/CardSection';
import Image from 'next/image';
import { productCardInfo } from './container/productCardInfo';
import ProductCard from './container/ProductCard';
import { Button } from '@mui/material';
import SchoolCrd from './container/schoolCard/SchoolCard';
import Table from './container/table/Table';
import ThreeDbutton from './container/ThreeDbutton/ThreeDbutton';
import Footer from '../footer/Footer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Homepage = () => {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div>
      <div className={classes.section1Background}>
        <div className={classes.section1}>
          <SectionOne />
        </div>
      </div>

      <div className={classes.section2}>
        <div className={classes.section2Container}>
          <CustomSlider ImgUrls={ImgUrlsSet} />
        </div>
      </div>

      <div className={classes.setcion3}>
        <div className={classes.section3Inner}>
          <VerticalDividerMiddle />
        </div>
      </div>

      <section className={classes.section4background}>
        <div className={classes.section4}>
          <h3 className={classes.section4Title}>
            BrightClass combines learning science, AI and neuroscience to
            improve teaching & learning outcomes
          </h3>
          <div className={classes.section4InnerContainer}>
            {/* //1 */}
            <div>
              <img
                src={`${BASE_URL.STATIC_SERVER}/selfLearnScreen.png`}
                alt="img"
                style={{ width: '100%' }}
              />
              <div className={classes.section4TextContainer}>
                <div className={classes.section4smallText}>For students</div>
                <div className={classes.section4subLabel}>
                  {' '}
                  Slef study any topic with Bright AI
                </div>
              </div>
            </div>

            {/* //2 */}
            <div>
              <img
                src={`${BASE_URL.STATIC_SERVER}/practiceScreen.png`}
                alt="img"
                style={{ width: '100%' }}
              />
              <div className={classes.section4TextContainer}>
                <div className={classes.section4smallText}>For students</div>
                <div className={classes.section4subLabel}>
                  {' '}
                  Practice & Improve your score for each topic with Bright AI
                </div>
              </div>
            </div>
            {/* //3 */}
            <div>
              <img
                src={`${BASE_URL.STATIC_SERVER}/birdAiScreen1.png`}
                alt="img"
                style={{ width: '100%' }}
              />
              <div className={classes.section4TextContainer}>
                <div className={classes.section4smallText}>For teachers</div>
                <div className={classes.section4subLabel}>
                  {' '}
                  Create lessons on any topic using different structures &
                  desired outcomes{' '}
                </div>
              </div>
            </div>
            {/* //4 */}
            <div>
              <img
                src={`${BASE_URL.STATIC_SERVER}/birdAiScreen2.png`}
                alt="img"
                style={{ width: '100%' }}
              />
              <div className={classes.section4TextContainer}>
                <div className={classes.section4smallText}>For teachers</div>
                <div className={classes.section4subLabel}>
                  {' '}
                  Create questions or assignments on the spot for any topic
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /// */}

      {/* //section5 */}
      <section className={classes.section5background}>
        <div className={classes.section5}>
          <h3 className={classes.section5Title}>
            Become part of BrightClass Next Gen Classrooms
          </h3>
          <div>
            <div className={classes.cardsContainer}>
              {productCardInfo.map((item) => (
                <ProductCard
                  key={item.title}
                  img={item.img}
                  title={item.title}
                  // titleStyle={classes.productTitleStyle}
                  pera={item.pera}
                  // peraStyle={classes.ProductCardPeraStyle}
                  clickHandler={() => {
                    pageRedicrect(item.clickLink, item.samePage);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* //section6 */}
      <section className={classes.section6background}>
        <div className={classes.section6}>
          <h3 className={classes.section6Title}>
            See how BrightClass will truly work for you
          </h3>
          <div className={classes.buttonsContainer}>
            <Button variant="outlined" className={classes.twoD_Button}>
              Teachers
            </Button>

            <Button variant="outlined" className={classes.twoD_Button}>
              Students
            </Button>

            <Button variant="outlined" className={classes.twoD_Button}>
              Parents
            </Button>

            <Button variant="outlined" className={classes.twoD_Button}>
              Administrators
            </Button>
          </div>

          <img
            src="https://birdai-website.s3.ap-south-1.amazonaws.com/birdHomePageAccordion2.png"
            alt="img"
            style={{ width: '100%' }}
          />
        </div>
      </section>

      {/* //section7 */}
      <section className={classes.section7background}>
        <div className={classes.section7}>
          <h3 className={classes.section7Title}>
            <span>Educators</span>
            <img
              src={`${BASE_URL.STATIC_SERVER}/heartIcon.svg`}
              alt="birdHubImage1"
              style={{ width: mobileView ? '29px' : '49px' }}
            />
            <span> BrightClass</span>
          </h3>

          <div className={classes.section7CardContainer}>
            <SchoolCrd />
            <SchoolCrd />
          </div>
        </div>
      </section>

      <section className={classes.section8background}>
        <div className={classes.section8}>
          <h3 className={classes.section8Title}>
            One platform for all your teaching-learning needs
          </h3>

          <div className={classes.section8Table}>
            {mobileView ? (
              <div>
                <img
                  src={`${BASE_URL.STATIC_SERVER}/featuresMobileTable.png`}
                  alt="img"
                  style={{ width: '100%' }}
                />
              </div>
            ) : (
              <img
                src={`${BASE_URL.STATIC_SERVER}/featuresTable.png`}
                alt="img"
                style={{ width: '100%' }}
              />
            )}
          </div>
        </div>
      </section>

      <section className={classes.section9background}>
        <div className={classes.section9}>
          <h3 className={classes.section9Title}>
            Upgrade your classrooms today
          </h3>
          <h5 className={classes.section9Para}>
            Book time with us. We would love to learn more about your school’s
            needs and discuss how best we can partner with you.
          </h5>

          <div>
            <ThreeDbutton label={'Book demo'} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
