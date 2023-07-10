import React from 'react'
import { BASE_URL } from '@/components/common/constants'

const TableItemIcon = ({ iconLink }) => {
  return (
    <>
      <img
        src={`${BASE_URL.STATIC_SERVER}${iconLink}`}
        alt="img"
        style={{ width: '36px', margin: '0 5px' }}
      />
    </>
  )
}

export default TableItemIcon