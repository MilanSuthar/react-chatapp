import React from 'react'
import './layout.css'

const MainLayout = ({children}:any) => {
  return (
    <div className="user">
    <div className="containerdiv">{children}</div>
    </div>
  )
}

export default MainLayout