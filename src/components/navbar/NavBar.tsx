import React, { useRef, useState } from 'react'
import { FaCircleUser,FaPeopleGroup,FaPix,FaMessage,FaCirclePlus,FaEllipsisVertical } from 'react-icons/fa6'
import Popup from '../ui/popup/Popup'

const NavBar = ({toggleDrawer}:any) => {
   const [isPopupOpen, setPopupOpen] = useState(false);
  const anchorElRef = useRef(null);

  const handleOpenPopup = () => {
   setPopupOpen(!isPopupOpen);
 };

  console.log(isPopupOpen)

  const handleClosePopup = () => {
    setPopupOpen(false);
  };
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
    <div style={{height:50,width:50,borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}  onClick={handleOpenPopup}
          ref={anchorElRef}>
       <FaEllipsisVertical style={{height:20,width:20}} color='whitesmoke'/>
    </div>
    </div>
    <Popup
        open={isPopupOpen}
        position="bottom" // You can customize the position
        onClose={handleClosePopup}
        width={150}
        offset={140}
        height={220}
        anchorEl={anchorElRef}
        setPopupOpen={setPopupOpen}
      >
        <ul style={{listStyle:'none',padding:0}}>
          {['New Group','Select Chat','Settings','Log Out'].map((item,index)=><li style={{padding:0}}>
            <div style={{display:'flex',height:50,flex:1,padding:0,justifyContent:'center',alignItems:'center'}} onClick={()=>alert(`Clicked${item }`)}>{item}</div>
          </li>)}
        </ul>
        </Popup>
    
    </div>
  )
}

export default NavBar