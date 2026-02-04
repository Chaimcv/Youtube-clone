import React from 'react'
import Button from './Button'

const ButtonList = () => {
    //const 
  return (
    <div className='flex'>
        <Button name="All" />
        <Button name="Watched" />
        <Button name="Unwatched" />
        <Button name="Recently Uploaded" />
        <Button  name="Live"/>
         <Button  name="Recently watched"/>
    </div>
  )
}

export default ButtonList