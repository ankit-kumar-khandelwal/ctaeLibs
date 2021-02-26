import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes,faBars} from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";
class Navbar extends Component{
    
state={ clicked: false}

handleClick=() =>{
    this.setState({clicked: !this.state.clicked})
}
    render(){
        return(
            <nav className="NavbarItems">
              <a href="https://www.ctae.ac.in/"><h3 className="navbar-logo" >CTAE</h3></a> 
               <div className="menu-icon" onClick={this.handleClick}>
<FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars}  className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
               </div>
               <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                   {MenuItems.map((item,index)=>{
                       return(
                           <li key={index}>
                               
                               <a className={item.cName} href={item.url} >
                                 {item.title}
                               </a>
                               
                            </li>
                       )
                   }
                   )}
               </ul>
              
            </nav>
        )
    }


}
export default Navbar