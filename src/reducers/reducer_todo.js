import { actions } from '../actions';


const todos = (state = [], action) => {

    switch(action.type) {

        case actions.ADD_TODO:
            return [ ...state, [ action.todo, action.completed, action.id ] ];  // state.concat(action.payload);

        case actions.TOGGLE_TODO:
            state[action.id][1] = !state[action.id][1] ? true : false;
            return state;

        default:
            return state;

    }

}

export default todos;