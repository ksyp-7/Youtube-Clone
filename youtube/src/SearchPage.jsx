import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import ChnnelRow from './ChnnelRow';
import VideoRow from './VideoRow';
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
                image="https://picsum.photos/242/450"
                chnnel="Shukl Kashyap"
                verifed
                subs="215K"
                numofvideos={651}
                description="This is description!.This is description!.This is description!.
                This is description!.This is description!.This is description!."
            
            />
            <hr />
            <VideoRow />
        </div>
    )
}
