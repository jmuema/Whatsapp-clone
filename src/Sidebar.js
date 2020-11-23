import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from "@material-ui/icons/Chat";
import  MoreVertIcon  from "@material-ui/icons/MoreVert";
import React from 'react';
import "./Sidebar.css";

function Sidebar(props) {
    

    return (
        <div className="sidebar">
            <div className="sidebar__header"> 
            <Avatar />
            <div className="ssidebar__headerRight">
                <IconButton> 
                <DonutLargeIcon/>

                </IconButton>
                <IconButton> <ChatIcon/> </IconButton>
                <IconButton> <MoreVertIcon/> </IconButton>

                
                
            </div>

            
            </div>
            <div className="sidebar__search"> 
            
            
            </div>
            <div className="sidebar__chats"> 
            
            
            </div>
            {/* <h1> sidebar </h1> */}
        </div>
    )
}
export default Sidebar;
