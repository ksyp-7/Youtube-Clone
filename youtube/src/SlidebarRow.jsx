import React from 'react';
import './Slidebar.css';



function SlidebarRow({selected,title, Icon}) {
    return (
        <div className={`Row ${selected && "selected"}`}>
            <Icon className="Row_icon" />
            <h3 className="Row__">{title}</h3>
            
        </div>
    )
}

export default SlidebarRow
