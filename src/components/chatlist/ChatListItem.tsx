import React from 'react'
import { FaAngleDown, FaCircleUser } from 'react-icons/fa6'

const ChatListItem = () => {
  return (
    <li style={{listStyle:'none',padding:2}}>
        <div style={{display:'flex'}}>
            <div style={{display:'flex',paddingRight:10}}>
        <div style={{height:50,width:50,borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
       <FaCircleUser style={{height:40,width:40}} color='whitesmoke'/>
    </div></div>
    <div style={{display:'flex',flex:2,flexDirection:'column',borderBottom:'1px solid lightgray'}}>
        <p style={{margin:0,fontSize:18}}>Example Name</p>
        <p style={{margin:0,fontSize:16}}>Example User Message</p>
    </div>
    <div style={{display:'flex',flex:1,flexDirection:'column',gap:10,borderBottom:'1px solid lightgray',paddingRight:10}}>
        <p style={{margin:0,fontSize:14,textAlign:'end'}}>9.30 Am</p>
        <div style={{display:'flex',justifyContent:'end',height:30,paddingRight:0}}>
            <FaAngleDown/>
        </div>
    </div>
        </div>
    </li>
  )
}

export default ChatListItem