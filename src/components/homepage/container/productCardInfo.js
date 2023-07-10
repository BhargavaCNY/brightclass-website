import { BASE_URL } from "@/components/common/constants";


export const productCardInfo = [
  {
    id: 1,
    classname: 'subSection2',
    img: `${BASE_URL.STATIC_SERVER}/interactiveWhiteBoard.png`,
    // img: cnxHomeCardImg1,
    title: 'Portable Interactive Whiteboard',
    pera: ' The most simplest way to get started with meetings ',
    btnText: 'Learn More',
    clickLink: '/bird-bar',
    samePage: false,
  },
  {
    id: 2,
    classname: 'subSection3',
    img: `${BASE_URL.STATIC_SERVER}/cloudPortalLandingPage.png`,
    // img: cnxHomeCardImg2,
    title: `Software Platform`,
    pera: 'A simple, integrated, and wireless meeting solution ',
    btnText: 'Learn More',
    clickLink: '/canvas',
    samePage: true,
  },
  {
    id: 3,
    classname: 'subSection4',
    img: `${BASE_URL.STATIC_SERVER}/interactiveFlatPanel.png`,
    // img: cnxHomeCardImg3,
    title: 'Interactive Flat Panel',
    pera: 'All-in-one collaboration solution for productive meetings',
    btnText: 'Learn More',
    clickLink: '/bird-hub',
    samePage: true,
  },
];
