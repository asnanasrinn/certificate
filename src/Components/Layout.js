import React from 'react'
import Dsidebar from './Dashboard/Dsidebar'
import Dheader from "./Dashboard/Dheader"

function Layout({children}) {
  return (
    <div>
      <Dheader />
      <div style={{display:"flex"}}>
        <Dsidebar />
        <div className='w-100'>{children}</div>
      </div>
    </div>
  )
}

export default Layout
