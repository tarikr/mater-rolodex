import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="contact" src={`https://robohash.org/${props.contact.id}?set=set2$size=120x120`}></img>
        <h2>{props.contact.name}</h2>
        <h2>{props.contact.email}</h2>
    </div>
)