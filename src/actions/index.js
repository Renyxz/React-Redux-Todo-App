// Action variables
export const actions = {

    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    DELETE_TODO: 'DELETE_TODO'

}


// Filter variables
export const filters = {

    COMPLETED: 'COMPLETED',
    ACTIVE: 'ACTIVE'

}



// Action creators

// Add a todo item
export const addTodo = (todo, id) => {

    console.log('addTodo: ', todo );
    
    return {
        type: actions.ADD_TODO,
        todo,
        id,
        completed: false
    }

}


// Toggle a todo item between completed and undo 
export const toggleTodo = (id) => {

    console.log('toggleTodo: ', id);

    return {
        type: actions.TOGGLE_TODO,
        id
    }

}
