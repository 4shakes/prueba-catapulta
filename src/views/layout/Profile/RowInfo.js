import React from 'react'

const RowInfo = ({ label, area }) => {
  return (
    <div className="">
      <ul>
        <li>{label}</li>
        <li>{area}</li>
      </ul>
      <hr />
    </div>
  )
}

export default RowInfo
