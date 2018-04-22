import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


class AddTodo extends Component {

    constructor(props) {

        super(props);

        this.state = {

            todo: '',
            id: 0

        }

        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        
    }


    handleChange(event) {

        const todo = event.target.value;

        this.setState({
            todo
        });
        
    }
    
    
    handleSubmit(event) {
        
        event.preventDefault();

        const todo = this.state.todo;
        let id = this.state.id;

        // If input field is empty / whitespaces, abort.
        if(!todo.trim()) {
            return;
        }

        // Add todo item - This will call the addTodo() action creator
        this.props.todo(todo, id);

        id++;
        
        // Clears input field
        this.setState({
            todo: '',
            id
        });

    }


    render() {

        // console.log(this.state.todo, this.state.id);

        return(

            <div>
                
                <form className="form-group" onSubmit={ this.handleSubmit } >
                
                    <input className="form-control" value={ this.state.todo } type="text" onChange={ this.handleChange } placeholder="I have to..." />

                </form>

            </div>

        );

    }

}

// Dispatch addTodo - this will map the addTodo() action creator into a prop of AddTodo
const mapDispatchToProps = (dispatch) => {

    return {
        todo: (todo, id) => dispatch( addTodo(todo, id) )
    }

}

export default connect( null, mapDispatchToProps )(AddTodo);