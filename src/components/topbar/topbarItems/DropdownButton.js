import React from 'react'
import style from './Dropdown.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const DropdownButton = ({ title, Items }) => {
  return (
    <>
      <div class={style.dropdown}>
        <button class={style.dropbtn}>{title}
          <ExpandMoreIcon fontSize='small' />
        </button>
        <div class={style.dropdownContent}>
          <Items />
        </div>
      </div>
    </>
  )
}

export default DropdownButton