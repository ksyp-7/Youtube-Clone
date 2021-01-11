import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import ChnnelRow from './ChnnelRow';
import './Searchpage.css';

export default function SearchPage() {
    return (
        <div className="SearchPage">
            <div className="Serch_filter">
                <TuneIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChnnelRow />
            <hr />
        </div>
    )
}
