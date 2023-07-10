import * as React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import classes from './CardSection.module.css'
import { Button } from "@mui/material";
import { BASE_URL } from "@/components/common/constants";

export default function VerticalDividerMiddle() {
  return (
    <div>
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: "background.paper",
          color: "text.secondary",
          "& svg": {
            m: 1.5
          },
          "& hr": {
            mx: 0.5
          }
        }}
      >
        <div className={classes.section3Text}>For Teachers</div>
        <Divider orientation="vertical" variant="middle" flexItem />
        <div className={classes.section3Text}>For Students</div>
        <Divider orientation="vertical" variant="middle" flexItem />
        <div className={classes.section3Text}> For Institutes</div>
      </Box> */}

      <Box

        className={classes.BoxMainContainer}
      // sx={{
      //   display: "flex",
      //   alignItems: "center",
      //   width: "fit-content",
      //   border: (theme) => `4px solid #4A4A4A`,
      //   borderRadius: '16px',
      //   padding: '40px 73px',
      //   // margin: 'auto',
      //   padding: '40px 73px',

      //   display: 'flex',
      //   width: '100%',
      //   justifyContent: 'space-around',
      //   boxShadow: '12px 12px 0px #4A4A4A',
      // }}
      >

        <div className={classes.subCardContainer}>
          <div>
            <img src={`${BASE_URL.STATIC_SERVER}/fotTeacherIcon.svg`} alt="img" width={46} />
          </div>
          <div>
            <div className={classes.section3Text}>For Teachers</div>
            <Button variant="outlined" className={classes.twoD_Button} >
              Sign up
            </Button>
          </div>

        </div>

        <Divider orientation="vertical" variant="middle" flexItem
          style={{
            border: '2px solid #4A4A4A',
            borderRadius: '14px'
          }} />
        <div className={classes.subCardContainer}>
          <div >

            <img src={`${BASE_URL.STATIC_SERVER}/fontStudentIcon.svg`} alt="img" width={46} />
          </div>

          <div>
            <div className={classes.section3Text}>For Students</div>
            <Button variant="outlined" className={classes.twoD_Button} >
              Sign up
            </Button>
          </div>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem style={{
          border: '2px solid #4A4A4A',
          borderRadius: '14px'
        }} />

        <div className={classes.subCardContainer}>
          <div>

            <img src={`${BASE_URL.STATIC_SERVER}/forInstituerIcon.svg`} alt="img" width={46} />
          </div>

          <div>
            <div className={classes.section3Text}> For Institutes</div>
            <Button variant="outlined" className={classes.twoD_Button} >
              Sign up
            </Button>
          </div>
        </div>
      </Box>
    </div >
  );
}
