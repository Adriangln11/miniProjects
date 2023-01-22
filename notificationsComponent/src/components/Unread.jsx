import React from 'react';


const Unread = (props) => {

    return (
        <div className='unread-container'>
            <h2 >Notifications</h2><span className='read-counter'>{props.unreads}</span>
        </div>
    );
}
Unread.defaultProps={unreads: 5}

export default Unread;
