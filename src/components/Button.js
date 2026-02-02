import React from 'react'

const Button = ({ name }) => {
  return (
    <div>
        <button className=' m-2 px-2 border border-gray-100 rounded-md bg-slate-100'>{name}</button>
    </div>
  )
}

export default Button