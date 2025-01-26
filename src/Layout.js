import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


function Layout() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <br></br>
        <Link to='./Pages/Slides'>Slides</Link><br></br>
        <Link to='./components/Header'>Header</Link><br></br>
        <Link to='./components/Footer'>Footer</Link><br></br>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Layout
