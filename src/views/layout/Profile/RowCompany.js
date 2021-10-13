import React from 'react'

const RowCompany = (props) => {
  return (
    <li key={props.item.name}>{props.item.name}</li>
  )
}

export default RowCompany
