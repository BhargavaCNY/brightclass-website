import React from 'react'
import classes from './Footer.module.css'
import { BASE_URL } from '../common/constants'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ButtonCard from './content/ButtonCard';
import { ButtonContent } from './content/buttonContentList';
import IconImgTag from './content/IconImgTag';

const Footer = () => {
  return (


    <>
      <div className={classes.footerContainer}>
        <div className={classes.footerMain}>


          <div className={classes.footerContainerInner}>
            <section className={classes.section1}>
              <div className={classes.section1BrandContainer}>
                <img
                  src={`${BASE_URL.STATIC_SERVER}/brightclassLogoWithName.svg`}
                  alt="icon"
                  width="110"
                  height="36"
                />
              </div>
              <p className={classes.footerPara}>
                BrightClass is an educational software to teach in any mode and offers numerous digital tools to create an engaging learning environment.
              </p>
              <p className={classes.footerPara}>
                By the founders of the Global Leaders in Portable Interactive Sensor Technology.
              </p>
              <div className={classes.mainBrandLogo}><img src={`${BASE_URL.STATIC_SERVER}/cnxBlackLogo.svg`} alt="icon" /></div>
            </section>

            <section className={classes.section2}>

              <h5 className={classes.section2Header}>QUICK LINKS</h5>
              <ul className={classes.sectionUl}>
                <li className={classes.sectionLI}>
                  <a
                    href={'#'}
                    target="_self"
                    className={classes.linkTagStyle}
                  >
                    Pricing
                  </a>
                </li>

                <li className={classes.sectionLI}>
                  <a
                    href={'#'}
                    target="_self"
                    className={classes.linkTagStyle}
                  >
                    Contact Us
                  </a>
                </li>

                <li className={classes.sectionLI}>
                  <a
                    href={'#'}
                    target="_self"
                    className={classes.linkTagStyle}
                  >
                    Quick Start
                  </a>
                </li>


                <li className={classes.sectionLI}>
                  <a
                    href={'#'}
                    target="_self"
                    className={classes.linkTagStyle}
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </section>



            <section className={classes.section3}>
              <h5 className={classes.section2Header}> BUSINESS ENQUIRY</h5>
              <ul className={classes.sectionUl}>

                <li className={classes.sectionLI}>
                  <PhoneIcon />
                  <span>
                    <a
                      href="tel:91888 474 3388"
                      className={classes.linkTagStyle}
                    >
                      (+91) 888 474 3388
                    </a>
                  </span>
                </li>
                <li className={classes.sectionLI}>
                  <EmailIcon />
                  <span>
                    <a
                      href="mailto:sales@brightclass.com"
                      className={classes.linkTagStyle}
                    >
                      sales@brightclass.com
                    </a>
                  </span>
                </li>
              </ul>
              <h5 className={classes.section2Header}>
                PRODUCT SUPPORT
              </h5>
              <ul className={classes.sectionUl}>
                <li className={classes.sectionLI}>
                  <PhoneIcon />
                  <span>
                    <a href="tel:1800 889 0260" className={classes.linkTagStyle}>
                      1800 889 0260
                    </a>
                  </span>
                </li>
                <li className={classes.sectionLI}>
                  <EmailIcon />
                  <span>
                    <a
                      href="mailto:support@brightclass.com"
                      className={classes.linkTagStyle}
                    >
                      support@brightclass.com
                    </a>
                  </span>
                </li>
              </ul>
            </section>


            <section className={classes.section4}>
              <header className={classes.section2Header}>
                DOWNLOADS
              </header>

              <div>
                {ButtonContent.map(item => (
                  <ButtonCard item={item} />
                ))}

              </div>

            </section>
          </div>
        </div>
      </div>

      <div className={classes.footerTwoContainer}>
        <div className={classes.footerTwoContainer1}>
          <div className={classes.footerTwoTextContainer}>
            <small className={classes.smallText}> &#169;  2023 BrightClass. All Rights Reserved</small>
            <div>
              <a
                href='#'
                target="_blank"
                className={classes.termsTagStyle + ' ' + classes.smallText}
              >
                Terms of Service
              </a>
            </div>
            <div>
              <a
                href='#'
                target="_blank"
                className={classes.termsTagStyle + ' ' + classes.smallText}
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className={classes.iconContainer}>
            <a
              href='#'
              target="_blank"
              className={classes.linkTagStyle + ' ' + classes.socialIcons}
            >
              <IconImgTag img={`${BASE_URL.STATIC_SERVER}/facebookBlackIcon.svg`} />
            </a>


            <a
              href='#'
              target="_blank"
              className={classes.linkTagStyle + ' ' + classes.socialIcons}
            >
              <IconImgTag img={`${BASE_URL.STATIC_SERVER}/twitterBlackIcon.svg`} />
            </a>



            <a
              href='#'
              target="_blank"
              className={classes.linkTagStyle + ' ' + classes.socialIcons}
            >
              <IconImgTag img={`${BASE_URL.STATIC_SERVER}/youtubeBlackIcon.svg`} />
            </a>
          </div>
        </div>
      </div >



    </>

  )
}

export default Footer