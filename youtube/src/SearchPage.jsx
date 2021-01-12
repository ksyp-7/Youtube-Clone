import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import ChnnelRow from './ChnnelRow.jsx';
import VideoRow from './VideoRow.jsx';
import './Searchpage.css';

export default function SearchPage() {
    return (
        <div className="SearchPage">
            <div className="Serch_filter">
                <TuneIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChnnelRow
                image="https://picsum.photos/500/450"
                chnnel="Shukl Kashyap"
                verifed
                subs="215K"
                numofvideos={651}
                description="This is description!.This is description!.This is description!.
                This is description!.This is description!.This is description!."
            
            />
            <hr />
            <VideoRow 
              views="222k"
              image="https://picsum.photos/501/250"
              chnnel="Shukl Kashyap"
              subs="215K"
              timestamp="5 minites ago"
              title="This is TITLE !Important"
              description="This is description!.This is description!.This is description!.
              This is description!.This is description!.This is description!."
              />
              <VideoRow 
              views="222k"
              image="https://picsum.photos/350/250"
              chnnel="Shukl Kashyap"
              subs="215K"
              timestamp="5 minites ago"
              title="This is TITLE !Important"
              description="This is description!.This is description!.This is description!.
              This is description!.This is description!.This is description!."
              />
              <VideoRow 
              views="222k"
              image="https://picsum.photos/765/250"
              chnnel="Shukl Kashyap"
              subs="215K"
              timestamp="5 minites ago"
              title="This is TITLE !Important"
              description="This is description!.This is description!.This is description!.
              This is description!.This is description!.This is description!."
              />
              <VideoRow 
              views="222k"
              image="https://picsum.photos/400/250"
              chnnel="Shukl Kashyap"
              subs="215K"
              timestamp="5 minites ago"
              title="This is TITLE !Important"
              description="This is description!.This is description!.This is description!.
              This is description!.This is description!.This is description!."
              />
              <VideoRow 
              views="222k"
              image="https://picsum.photos/391/250"
              chnnel="Shukl Kashyap"
              subs="215K"
              timestamp="5 minites ago"
              title="This is TITLE !Important"
              description="This is description!.This is description!.This is description!.
              This is description!.This is description!.This is description!."
              />
              <VideoRow 
              views="222k"
              image="https://picsum.photos/395/250"
              chnnel="Shukl Kashyap"
              subs="215K"
              timestamp="5 minites ago"
              title="This is TITLE !Important"
              description="This is description!.This is description!.This is description!.
              This is description!.This is description!.This is description!."
              />

<VideoRow 
              views="222k"
              image="https://picsum.photos/785/550"
              chnnel="Shukl Kashyap"
              subs="215K"
              timestamp="5 minites ago"
              title="This is TITLE !Important"
              description="This is description!.This is description!.This is description!.
              This is description!.This is description!.This is description!."
              />
              <VideoRow 
              views="222k"
              image="https://picsum.photos/645/550"
              chnnel="Shukl Kashyap"
              subs="215K"
              timestamp="5 minites ago"
              title="This is TITLE !Important"
              description="This is description!.This is description!.This is description!.
              This is description!.This is description!.This is description!."
              />
              <VideoRow 
              views="222k"
              image="https://picsum.photos/400/250"
              chnnel="Shukl Kashyap"
              subs="215K"
              timestamp="5 minites ago"
              title="This is TITLE !Important"
              description="This is description!.This is description!.This is description!.
              This is description!.This is description!.This is description!."
              />
              <VideoRow 
              views="222k"
              image="https://picsum.photos/430/150"
              chnnel="Shukl Kashyap"
              subs="215K"
              timestamp="5 minites ago"
              title="This is TITLE !Important"
              description="This is description!.This is description!.This is description!.
              This is description!.This is description!.This is description!."
              />

        </div>
    )
}
    