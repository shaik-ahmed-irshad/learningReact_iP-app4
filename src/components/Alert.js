import React from 'react'
import './css/Search.css'

const Alert = ({alert}) => {
  return (
    alert !== null && (
      <center className='bg-dark'>
        <div className="alert ">{alert.msg}</div>
      </center>
    )
  );
}

export default Alert