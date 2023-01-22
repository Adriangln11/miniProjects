import React from 'react';

const ReadMarker = (props) => {
    
    return (
        <div className='read-marker-container'>
            <span onClick={props.handleClick}>Mark all as read</span>
        </div>
    );
}

export default ReadMarker;
