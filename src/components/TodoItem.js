import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';


// TodoItem - Click to complete. It will move to the Completed Items List below.

const TodoItem = ({ todos, toggle }) => {

    // console.log(todos);

    return(

        todos.map((todo, id) => {

            console.log(todo);

            const itemId = todo[2];
            const todoItem = todo[0];

            return(


                <li className="list-group-item" key={ id } onClick={ () => toggle(itemId) } >
                    
                    { todoItem }

                </li>

            );

        })


    );

}

const mapDispatchToProps = (dispatch) => {

    
    return {
        toggle: (id) => dispatch( toggleTodo(id) )
    };

}

export default connect( null, mapDispatchToProps )(TodoItem);