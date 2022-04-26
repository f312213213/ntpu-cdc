import React from 'react'

const CheckBox = ({ value, text, defaultChecked }) => {
  return (
      <div className={''}>
        <input type="checkbox" defaultChecked={defaultChecked} id={value} className={'mr-2'}/>
        <label htmlFor={value}>{text}</label>
      </div>
  )
}

export default CheckBox
