import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-router-dom/NavLink'
  

 
 const NavBar = props => {

    const redirectToUser = () => {
      props.history.push(`/users/${props.userInfo.userId}`)
    }
    
     return (
       <Navbar className='navbar'>
          <Link to='/'>Home</Link>
          {props.userInfo.userId && <Link onClick={redirectToUser}>{props.userInfo.username}'s Page</Link>}
          
          {props.userInfo.userId 
          ? <Link to='/login' onClick={props.logoutUser}>Logout</Link>
          : <Link to='/login'>Login</Link>}
          <Link to='/teams'>Create Team</Link>
       </Navbar>
     )
   
 }
 
 export default withRouter(NavBar);

 