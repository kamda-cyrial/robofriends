import React from 'react';
import 'tachyons';
const Card = (props) =>{
    return( 
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3'>
            <img src={`https://robohash.org/${props.username + props.id+ "test"}?200x200`} alt="Robots" />
            <div className="tc">
                <h2>{props.name}</h2>
                <p>{props.email}</p>
                <h2>{props.username}</h2>
            </div>
        </div>
    )
}

export default Card; 