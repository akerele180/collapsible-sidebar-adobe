import React from 'react';
import {
  Switch,
  Route, 
  Redirect
} from 'react-router-dom'
import './Content.css';
import Dashboard from '../pages/Dashboard'
import Invitation from '../pages/Invitation'
import Messages from '../pages/Messages'
import Reports from '../pages/Reports'
import UserManagement from '../pages/User-Management'
import Search from './Search';
import Detail from './Detail';

function Content() {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route path="/user-management" component={UserManagement}/>
        <Route path="/messages" component={Messages}/>
        <Route path="/invitation" component={Invitation}/>
        <Route path="/reports" component={Reports}/>
        <Redirect to="dashboard"/>
      </Switch>
      <Search />
      {/* <div className="two"> */}
        <Detail />
      {/* </div> */}
    </div>
  )
}

export default Content;