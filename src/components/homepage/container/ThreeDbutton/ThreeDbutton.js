import React from 'react'
import classes from './ThreeDbutton.module.css'

const ThreeDbutton = ({ label }) => {
  return (

    <>
      {/* <Button
            className={classes.shopHubBtn}
            color="primary"
            variant="contained"
            onClick={() => {
              window.open('btnLink', '_blank');
            }}
          >
            {'Book a Free Demo'}
          </Button> */}

      {/* <button class={classes.pushable}>
            <span class={classes.front}>Push me</span>
          </button> */}

      <button class={classes.learnMore}>{label || 'Book demo'}</button>
    </>
  )
}

export default ThreeDbutton