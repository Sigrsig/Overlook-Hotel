import React from 'react'
import myLogo from '../img/icons8-honeycombs-100.png'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { StylesProvider } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';


function Header() {
    const [state, setState] = React.useState(false)


   const toggleDrawer = (open) => (event) => {
         setState(open)
    }


    return (
        <StylesProvider injectFirst>
        <div id="hotel-head">
            <NavLink to="../" ><img src={myLogo} id="hotel-logo" alt="The Overlook hotel logo" ></img></NavLink>

                 
       
            <nav id="hotel-nav-min">
                
                        <IconButton className="nav-butt" onClick={toggleDrawer(true)}> <MenuIcon /></IconButton>
                        
                        <Drawer 
                            anchor={'top'}
                            open={state}
                            onClose={toggleDrawer(false)}  
                            variant = 'temporary'
                            >

                            <div id="min-nav-links">
                                <NavLink className="nav-butt" to="/Rooms" >Rooms</NavLink>
                                <NavLink className="nav-butt" to="/Experiences" >Experiences</NavLink>
                                <NavLink className="nav-butt" to="/Dining" >Dining</NavLink>
                                <NavLink className="nav-butt" to="/Team" >Our Team</NavLink>
                            </div>
                            
                            <IconButton className="nav-butt" onClick={toggleDrawer(false)}> <CloseIcon /></IconButton>
                        </Drawer>

               
            </nav>

          
            <nav id="hotel-nav-max">
                <div id="hot-nav">
                    <NavLink className="nav-butt" to="/Rooms" >Rooms</NavLink>
                    <NavLink className="nav-butt" to="/Experiences" >Experiences</NavLink>
                    <NavLink className="nav-butt" to="/Dining" >Dining</NavLink>
                    <NavLink className="nav-butt" to="/Team" >Our Team</NavLink>
                </div>
            </nav>
            

            
        </div>
        </StylesProvider>
    )
}

export default Header


