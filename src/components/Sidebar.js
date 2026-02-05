import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen=useSelector((store) => store.app.isMenuOpen);
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-md w-50'>
        
        <ul>
            <li  className=' hover:bg-slate-100 rounded-lg'><Link to="/"><img className="w-10 h-10 inline-flex" src="https://endlessicons.com/wp-content/uploads/2012/11/home-icon-614x460.png" alt='Home' />Home</Link></li>
            <li className=' hover:bg-slate-100 rounded-lg'> <img className="w-5 h-5 inline-flex m-2" src="https://img.icons8.com/?size=24&id=ajczeHCWXbyR&format=png" alt='shorts' />  Shorts</li>
            <li className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-5 inline-flex m-2" src="https://img.icons8.com/?size=100&id=DA3vWy7pLcg6&format=png&color=000000" alt="subscription" />Subscriptions </li>
        </ul>
         <h1 className='font-bold'>You</h1>
        <ul>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-5 m-2 inline-flex" src="https://seekicon.com/free-icon-download/history_8.svg" />History</li>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-10 h-10 inline-flex" />Playlist</li>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-10 h-10 inline-flex" />Watch Later</li>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-10 h-10 inline-flex" />Liked Videos</li>
        </ul>
        <h1 className='font-bold'>Explore</h1>
        <ul>
            <li  className=' hover:bg-slate-100 rounded-lg'>Shopping</li>
            <li>Music</li>
            <li>Films</li>
            <li>Show more</li>
        </ul>
         <h1 className='font-bold'>More from Youtube</h1>
        <ul>
            <li>YouTube Premium</li>
            <li>YpuTube Music</li>
            <li>YouTube Kids</li>
            
        </ul>
       
        <ul>
            <li>Settings</li>
            <li>Report History</li>
            <li>Help</li>
            <li>Send Feedback</li>
        </ul>
    </div>
  )
}

export default Sidebar