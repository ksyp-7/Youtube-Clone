import React from 'react';
import './Slidebar.css';



function SlidebarRow({title, Icon}) {
    return (
        <div className="Row">
            <Icon className="Row_icon" />
            <h3 className="Row__">{title}</h3>
            
        </div>
    )
}

export default SlidebarRow
