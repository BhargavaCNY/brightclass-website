'use client';
import React, { useState } from 'react';
import { BASE_URL } from '../common/constants';
import classes from './Topbar.module.css';
import { useTheme } from '@mui/material/styles';
import { Drawer, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SidebarMenuItem from './topbarItems/SidebarMenuItem';

const Topbar = () => {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down('sm'));
  const [isMobileSideBar, setIsMobileSideBar] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const openSubMenu = (activeMenu) => {
    // setIsSubMenu(true);
    // setMenuInfo(activeMenu);
  };

  const mobileMenuHandler = () => {
    setIsMobileSideBar(true);
    setShowSubMenu(true);
    // setSideBarScreen('');
  };

  const closeSideMobileMenu = () => {
    setIsMobileSideBar(false);
    setShowSubMenu(false);
    // setSideBarScreen('');
  };

  return (
    <>
      <div className={classes.topBarMain}>
        <div className={classes.topBarContainer}>
          {/* {mobileView && ( 
        <div onClick={mobileMenuHandler}>
          <MenuIcon fontSize="large" style={{ color: '#335AFB' }} />
        </div>
        )}  */}
          <div
            // onClick={() => {
            //   pageRedicrect('/', true);
            // }}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={`${BASE_URL.STATIC_SERVER}/brightclassLogoWithName.svg`}
              alt="icon"
              width="110"
              height="36"
            />
          </div>

          {/* {!mobileView && ( */}
          <div className={classes.menuItemsContainer}>
            <ul className={classes.navItemsContainer}>
              <li
              // onClick={() => {
              //   openSubMenu('Classroom Device');
              // }}
              >
                Classroom Device
              </li>

              <li
              // onClick={() => {
              //   openSubMenu('Pricing');
              // }}
              >
                Pricing
              </li>

              <li
              // onClick={() => {
              //   openSubMenu('Quick Start');
              // }}
              >
                Quick Start
              </li>

              <li
              // onClick={() => {
              //   openSubMenu('Contact Us');
              // }}
              >
                Contact Us
              </li>
            </ul>
          </div>
          {/* )} */}

          <div className={classes.navBarRightContainer}>
            <div
              className={mobileView ? classes.startedButton : classes.loginBtn}
              // onClick={() => {
              //   pageRedicrect(birdWebSitesLinks.canvasBirdAI);
              // }}
            >
              Login
            </div>

            {mobileView ? (
              <div onClick={mobileMenuHandler}>
                <MenuIcon fontSize="large" style={{ color: '#335AFB' }} />
              </div>
            ) : (
              <div
                className={classes.startedButton}
                // onClick={() => {
                //   pageRedicrect('/contact-us', true);
                // }}
              >
                Get started
              </div>
            )}
          </div>
        </div>
      </div>
      <Drawer
        anchor="left"
        open={isMobileSideBar}
        style={{
          width: '100%',
          zIndex: '9999',
        }}
        // onClose={closeSideMobileMenu}
        // onClose={() => {
        //   setIsMobileSideBar(false);
        // }}
        PaperProps={{
          style: {
            position: 'fixed',
            bottom: 0,
            top: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        {/* //Main */}
        <div
          style={{ overflow: 'hidden' }}
          className={showSubMenu ? classes.showMainMenu : classes.hideMainMenu}
          // onClick={() => { mobileSideMenuHandler("mainMenu") }}
        >
          <div
            style={{
              width: '100vw',
              // borderBottom: '1px solid #D3D3D3',
              display: 'flex',
              alignItems: 'center',
              padding: '23px 26px',
              background: '#FFFAF8',
            }}
          >
            <div>
              <img
                src={`${BASE_URL.STATIC_SERVER}/brightclassLogoWithName.svg`}
                alt="icon"
                width="110"
                height="36"
              />
            </div>
            <div
              style={{
                // padding: ' 23px 26px',
                width: '100vw',
                overflow: 'hidden',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
              onClick={closeSideMobileMenu}
            >
              <CloseIcon />
            </div>
          </div>
          <div
            style={{
              background: '#FFFAF8',
              height: '100vh',
              paddingLeft: '24px',
            }}
          >
            <SidebarMenuItem
              itemName="Products"
              // clickHandle={() => {
              //   mobileSideMenuHandler('products');
              // }}
            />
            <SidebarMenuItem
              itemName="Customers"
              // clickHandle={() => {
              //   mobileSideMenuHandler('customers');
              // }}
            />
            <SidebarMenuItem
              itemName="Resources"
              // clickHandle={() => {
              //   mobileSideMenuHandler('resources');
              // }}
            />
            <SidebarMenuItem
              itemName="Company"
              // clickHandle={() => {
              //   mobileSideMenuHandler('company');
              // }}
            />
            <SidebarMenuItem
              itemName="Contact Us"
              // clickHandle={() => {
              //   pageRedicrect('/contact-us', true);
              // }}
            />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Topbar;
