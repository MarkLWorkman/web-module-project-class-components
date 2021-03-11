import React from 'react';

const Item = (props) => {
    return (
        <div onClick={() => props.toggleItem(props.id)} className={`item ${props.completed ? 'completed' : ''}`}>
            <p>{props.item}</p>
        </div>
    );
};

export default Item;