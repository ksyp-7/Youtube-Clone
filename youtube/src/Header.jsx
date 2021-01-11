import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Avatar from '@material-ui/core/Avatar';


//rfce;
function Header() {
    const [inputSearch, setInput] =useState("");
    return (
        <div className="header">
            <div className="header_left">
            <MenuIcon />
            <Link to="/"> 
            <img
            className="header_logo"
             src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt= ""
            />
            </Link>
            </div>



            <div className="header_search">
            <input
            onChange={(e)=> setInput(e.target.value)}
            value={inputSearch}
             placeholder="Search" type='text' />
             <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header_InputBtn"/>
            </Link>
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
