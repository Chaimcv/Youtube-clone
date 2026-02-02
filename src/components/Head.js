import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col'>
        <div className='flex'>
            <img className="h-[8%] w-[8%]" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1280px-Hamburger_icon.svg.png' alt='hamburger menu'></img>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png' alt='logo'></img>
        </div>
        <div>
            <input type='text' />
            <button>Search</button>
        </div>
        <div>
            <img src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt='user-icon'></img>
        </div>
    </div>
  )
}

export default Head