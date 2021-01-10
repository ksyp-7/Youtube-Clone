import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Videocard.css';

function VideoCard({image,channel,channelImage,title,views,timestamp}) {
    return (
        <div className="videoCard">
            <img src={image} alt=""/>
            <div className="VideoCard_info">
                <Avatar
                className="VideoCard_Ava"
                alt={channel}
                src={channelImage}
                />
                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} * {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;
