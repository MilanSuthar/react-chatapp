import React from 'react'
import ChatListItem from './ChatListItem'

const ChatList = () => {
  return (
    <div>
        <ul style={{padding:0}}>
           {Array(15).fill(1).map((item,index)=>
            <ChatListItem key={index}/>)}
        </ul>
    </div>
  )
}

export default ChatList