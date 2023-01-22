import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Card = (props) => {
    return (
        <div className='card-container'>
            <div className='cards'>
                <div className='card-img-container'>
                    <img className='img' src={props.url} alt=""/>
                </div>
                <div className='card-text-container'>
                    <p >
                        <span className='author'>{props.name} </span>{props.action} {props.linkedText ? <span className='card-linked-text'>{props.linkedText}</span> : false} {props.unread ? <span className='check'></span>: false}
                        <p className='card-when'>{props.when}</p>
                    </p>
                    
                </div>

                
                {props.linkedImg ? <div ><img className='card-linked-img' src={props.linkedImg}/></div> :  false}
                
            </div>

            <div >
                {props.message ? <p className='card-message'>{props.message}</p> : false}
                
            </div>
            
        </div>
    );
}

export default Card;
