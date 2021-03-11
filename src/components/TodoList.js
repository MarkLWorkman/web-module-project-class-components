import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <List>
            {props.toDo.map((item) => {
                <Item id={item.id} item={item.task} completed={item.completed} toggleItem={props.toggleItem} />
            })}
            <button onClick={props.clear}>Clear</button>
        </List>
    );
};

export default TodoList;