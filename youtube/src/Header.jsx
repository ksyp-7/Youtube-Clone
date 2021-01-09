import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Avatar from '@material-ui/core/Avatar';


//rfce;
function Header() {
    return (
        <div className="header">
            <div className="header_left">
            <MenuIcon />
            <img
            className="header_logo"
             src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt= ""
            />
            </div>



            <div className="header_search">
            <input placeholder="Search" type='text' />
            <SearchIcon className="header_InputBtn"/>
            </div>


            <div className="header_icons">
            <VideoCallIcon className="header_icon" />
            <AppsIcon className="header_icon" />
            <NotificationsActiveIcon className="header_icon" />
            <Avatar src="./ksyp.jpg" alt="Kashyap"/>
            </div>
        </div>
    )
}

export default Header;
