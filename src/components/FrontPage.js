import React from 'react'
import Slideshow from './Slideshow'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

function FrontPage() {
    

    return (
        <div>
        
    
            <Slideshow />
            <h2>TEST</h2>
           
            
        </div>
    )
}

export default FrontPage
