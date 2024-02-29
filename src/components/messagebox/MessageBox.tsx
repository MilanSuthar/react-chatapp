import React from 'react'
import { FaSmile, FaPlus } from 'react-icons/fa'
import { FaMicrophone } from 'react-icons/fa6'

const MessageBox = () => {
  return (
    <div style={{display:'flex',gap:15}}>
        <div style={{display:'flex',gap:15,height:70,alignItems:'center',paddingLeft:10,paddingRight:10}}>
            <FaSmile style={{height:25,width:25}}/>
            <FaPlus style={{height:25,width:25}}/>
        </div>
        <div style={{display:'flex',flex:2,alignItems:'center',gap:12}}>
            <input type="text" style={{height:45,width:'90%',border:'none',outline:'none',fontSize:18}}/>
            <FaMicrophone style={{height:25,width:25}}/>
        </div>
    </div>
  )
}

export default MessageBox