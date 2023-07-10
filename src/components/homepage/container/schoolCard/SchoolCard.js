import { Card } from '@mui/material'
import classes from './SchoolCard.module.css'
import { BASE_URL } from '@/components/common/constants'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from './StarIcon';

const SchoolCrd = () => {
  return (
    <>
      <Card className={classes.CardContainer}>

        <div className={classes.upperSection}>
          <img
            src={`${BASE_URL.STATIC_SERVER}/xaviersCollegeLogo.png`}
            alt="img"
            style={{ width: '67px' }}
          />
          <div className={classes.textContainer}>
            <div>Teacher Name,
            </div>
            <div>St. XAVIER’S COLLEGE, Calcutta</div>
          </div>
        </div>

        <p className={classes.cardPara}>
          I love BrightClass! It's an amazing digital classroom application that has  advanced teaching tools. It makes learning more fun and engaging for students. I also appreciate how easy it is to use.
          It's a great tool for schools!
        </p>

        <div className={classes.starContainer}>
          <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />

        </div>
      </Card>
    </>
  )
}

export default SchoolCrd