import { BASE_URL } from '@/components/common/constants'
import React from 'react'
import classes from './ButtonCard.module.css'

const ButtonCard = ({ item }) => {
  return (
    <div className={classes.container}>
      <img
        src={item.icon}
        alt="icon"
        width="27px"

      />
      <div >
        <div className={classes.label1}>
          DOWNLOAD
        </div>
        <div className={classes.label2}>
          {item.label}
        </div>
      </div>
    </div>
  )
}

export default ButtonCard