import React from 'react';
import './videorow';

function VideoRow({
    views,
    subs,
    description,
    timestamp,
    channel,
    title,
    image,
}) {
    return (
        <div className="videorow">
            <img src={image} alt=""></img>
            <div className="videorow_text">
                <h3>{title}</h3>
                <p className="videorow_head">
                    {channel} *
                    <span className="videorow_subs">
                        <span className="videorow_subsNumber">
                            {subs}
                        </span>
                    Subscribers
                    </span>
                    {views} views * {timestamp}
                </p>
                <p className="videorow_des">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default VideoRow
