import React from 'react';
import TodoItem from './TodoItem';


// TodoList - Shows a list of todo items

const TodoList = ({ todos }) => {

    // console.log(todo);

    return(
        <div className="col-lg-6 mb-5">

            <h3>Things to be done</h3>

            <ul className="list-group">

                <TodoItem todos={ todos } />
            
            </ul>

        </div>

    );

}


export default TodoList;