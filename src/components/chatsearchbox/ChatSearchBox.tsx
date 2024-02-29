import React from 'react'
import { FaFilter, FaMagnifyingGlass } from 'react-icons/fa6'

const ChatSearchBox = () => {
  return (
    <div style={{display:'flex',flex:1,backgroundColor:'white',height:36,borderBottom:'1px solid lightgray',padding:5}}>
    <div style={{borderRadius:'10px',height:32,width:'100%',outline:'none',border:'1px solid lightgrey',backgroundColor:'whitesmoke', display: 'flex', gap: '5px'}}>
    <div style={{display:'flex', alignItems:'center', height: '100%', paddingLeft: '10px'}}>
        <FaMagnifyingGlass/>
    </div>
    <input style={{border:'none',outline:'none',backgroundColor:'transparent',height:'100%',width:'100%',padding:0  }}/>
    </div>
    <div style={{display:'flex',padding:5,alignItems:'center'}}>
        <FaFilter/>
    </div>
    </div>
  )
}

export default ChatSearchBox