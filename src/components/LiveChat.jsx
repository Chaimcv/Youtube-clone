import React, { useEffect } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
const dispatch=useDispatch();
const chatMessages =useSelector((store)=> store.chat.messages);

    //API Polling
    useEffect(()=>{
        const i=setInterval(() => {
            //api call
         console.log("apipolling");
         console.log(chatMessages);
         dispatch(addMessage({
            name:generateRandomName(),
            message:makeRandomMessage(10),
         }))
        }, 2000);
        return ()=> clearInterval(i);
    })
  return (
    <div className='rounded-lg w-full h-[500px] pl-3 overflow-y-scroll flex-col-reverse'>
        {chatMessages.map((chatmsg,index)=>(
 <ChatMessages key={index} name={chatmsg.name} messsage={chatmsg.message} />
        ))}
   
    </div>
  )
}

export default LiveChat