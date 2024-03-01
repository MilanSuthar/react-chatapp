import React from 'react'
import { FaCircleUser,FaPeopleGroup,FaPix,FaMessage,FaCirclePlus,FaEllipsisVertical } from 'react-icons/fa6'

const NavBar = ({toggleDrawer}:any) => {
  return (
    <div style={{width:419,height:60,backgroundColor:'lightgrey',display:'flex',alignItems:'center',paddingLeft:20,paddingRight:20}}>
        <div style={{display:'flex',flex:2}}>
    <div style={{height:50,width:50,borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}} onClick={toggleDrawer}>
       <FaCircleUser style={{height:40,width:40}} color='whitesmoke'/>
    </div>
    </div>
    <div style={{display:'flex',flex:1}}>
    <div style={{height:50,width:50,borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
       <FaPeopleGroup style={{height:40,width:25}} color='whitesmoke'/>
    </div>
    <div style={{height:50,width:50,borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
       <FaPix style={{height:40,width:20}} color='whitesmoke'/>
    </div>
    <div style={{height:50,width:50,borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
       <FaMessage style={{height:40,width:20}} color='whitesmoke'/>
    </div>
    <div style={{height:50,width:50,borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
       <FaCirclePlus style={{height:40,width:20}} color='whitesmoke'/>
    </div>
    <div style={{height:50,width:50,borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
       <FaEllipsisVertical style={{height:20,width:20}} color='whitesmoke'/>
    </div>
    </div>
    
    </div>
  )
}

export default NavBar