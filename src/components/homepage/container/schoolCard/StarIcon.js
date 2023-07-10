import { BASE_URL } from '@/components/common/constants'
import React from 'react'

const StarIcon = () => {
  return (
    <>
      <img
        src={`${BASE_URL.STATIC_SERVER}/starIcon.svg`}
        alt="img"
        style={{ width: '36px', margin: '0 5px' }}
      />
    </>
  )
}

export default StarIcon