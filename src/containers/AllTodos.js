import React from 'react';
import { connect } from 'react-redux';
import { filters } from '../actions';
import TodoList from '../components/TodoList';
import CompletedItems from '../components/CompletedItems';


const AllTodos = ({ todos }) => {

    const filteredTodos = (filter) => {

        switch(filter) {

            case filters.ACTIVE:
                return todos.filter( item => !item[1] );
            
            case filters.COMPLETED:
                return todos.filter( item => item[1] );
            
            default:
                return todos;

        }

    }
    

    return(

        <div className="row d-flex">

          <TodoList todos={ filteredTodos(filters.ACTIVE) } />

          <CompletedItems todos={ filteredTodos(filters.COMPLETED) } />

        </div>

    );

}

const mapStateToProps = ({ todos }) => {

    return {
        todos
    };

}


export default connect( mapStateToProps )(AllTodos);