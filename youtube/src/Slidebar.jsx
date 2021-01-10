import React from 'react';
import './Slidebar.css';
import SlidebarRow from './SlidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Slidebar() {
    return (
        <div className="slide">
            <SlidebarRow selected Icon={HomeIcon} title="Home" />
            <SlidebarRow Icon={WhatshotIcon} title="Trending" />
            <SlidebarRow Icon={SubscriptionsIcon} title="Subscription" />
            <hr />
            <SlidebarRow Icon={LibraryAddIcon} title="Library" />
            <SlidebarRow Icon={HistoryIcon} title="History" />
            <SlidebarRow Icon={OndemandVideoIcon} title="Your videos" />
            <SlidebarRow Icon={WatchLaterIcon} title="Watch later" />
            <SlidebarRow Icon={ThumbUpAltIcon} title="Liked videos" />
            <SlidebarRow Icon={ExpandMoreIcon} title="Show more" />
        </div>
    )
}

export default Slidebar
