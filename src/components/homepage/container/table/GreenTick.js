import React from 'react'
import { BASE_URL } from '@/components/common/constants'

const GreenTick = () => {
  return (
    <>
      <img
        src={`${BASE_URL.STATIC_SERVER}/greenTickIcon.png`}
        alt="img"
        style={{ width: '28px', margin: '0 5px' }}
      />
    </>
  )
}

export default GreenTick