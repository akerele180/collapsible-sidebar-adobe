import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import Sidebar from './component/Sidebar';
import Content from './component/Content';
import { AiFillLeftSquare, AiFillRightSquare } from 'react-icons/ai';


export default function App() {
  const [ icon, setIcon ] = useState(true);

  const toggleBar = () => {
    setIcon(!icon);
    console.log('akerele')
  }

  return (
    <div className="App"> 
      <Router>                
        {
          icon ? [
            <Sidebar className="active"/>, 
            <AiFillLeftSquare className="active" onClick={toggleBar} style={{fontSize: 50, color: "#448FF8", position: 'relative', left: -4, top: "10%", cursor: "pointer"}} />, 
            ]
          : 
            <AiFillRightSquare className="active" onClick={toggleBar} style={{fontSize: 37, color: "#448FF8", position: 'relative', left: -4, top: "10%", cursor: "pointer"}} />
        }    
        <Content/>
      </Router>
    </div>
  )
}
