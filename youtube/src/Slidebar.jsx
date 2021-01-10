import React from 'react';
import './Slidebar.css';
import SlidebarRow from './SlidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

function Slidebar() {
    return (
        <div className="slide">
            <SlidebarRow Icon={HomeIcon} title="Home" />
            <SlidebarRow Icon={WhatshotIcon} title="Trending" />
            <SlidebarRow Icon={SubscriptionsIcon} title="Subscription" />
        </div>
    )
}

export default Slidebar
