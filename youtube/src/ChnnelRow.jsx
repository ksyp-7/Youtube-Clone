import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import './chnnelRow.css';

function ChnnelRow({image,chnnel,verifed,subs,numofvideos,description}) {
    return (
        <div className="chnnel_row">
            <Avatar className="chnnel_row_logo"
            alt={chnnel} src={image} />
<div className="chnnel_text">
    <h4>{chnnel} {verifed && <CheckCircleOutlinedIcon />}</h4>
    <p>
        {subs} subscribers * {numofvideos} videos
    </p>
    <p>
        {description}
    </p>

</div>
        </div>
    )
}

export default ChnnelRow
