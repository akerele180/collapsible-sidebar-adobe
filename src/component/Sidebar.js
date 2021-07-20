import React, { useState } from 'react'
import './Sidebar.css'
import Admin from '../assets/Admin.png';
import {
  BrowserRouter as Router,
  Link,
  Route, 
  Switch,
} from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaUserPlus } from 'react-icons/fa';
import { 
  RiMessage2Fill, 
  RiSendPlaneFill, 
  RiFolderKeyholeFill } from 'react-icons/ri';
  import { BiLeftIndent, BiRightIndent } from 'react-icons/bi';

function Sidebar() {
  const [ bar, setBar ] = useState(true);

  const toggleBar = () => {
    setBar(!bar)
  }
  return (
    <>
      <div className={ bar ? "sidebar" : "non-sidebar"}>
      <div className="profile">
        <img src={Admin} alt="profile-picture"/>
        <h3>Admin</h3>  
        <small>View Profile</small>
      </div>
    
      <nav>
        <ul>
          <li><Link to="/dashboard"><MdDashboard /><button>Dashboard</button></Link></li>
          <li><Link to="/user-management"><FaUserPlus/><button>User Management</button></Link></li>
          <li><Link to="/messages"><RiMessage2Fill/><button>Messages</button></Link></li>
          <li><Link to="/invitation"><RiFolderKeyholeFill/><button>Invite People</button></Link></li>
          <li><Link to="/reports"><RiSendPlaneFill/><button>Reports</button></Link></li>
        </ul>
      </nav>
   
      </div>
    </>
  )
}

export default Sidebar;