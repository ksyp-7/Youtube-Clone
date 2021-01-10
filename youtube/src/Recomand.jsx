import React from 'react';
import VideoCard from "./VideoCard";
import {  } from "./recomand.css";

function Recomand() {
    return (
        <div className="recomandedvideos">
            <h2>
                Recomanded
            </h2>
            <div className="recomand_video">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />

            </div>
        </div>
    )
}

export default Recomand
