import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { setUserInput, setTodo, deleteTodo, toggleTodo } from '../../reducers/mainReducer'




const FormContainer = (props) => {
    return (
        <Form
            setTodo={props.setTodo}
            setUserInput={props.setUserInput}
            userInput={props.userInput}
            todos={props.todos}
            deleteTodo={props.deleteTodo}
            toggleTodo={props.toggleTodo}
        />
    )
}


let mapStateToProps = (state) => {
    return {
        userInput: state.mainReducer.userInput,
        todos: state.mainReducer.todos
    }
}

export default connect(mapStateToProps, { setUserInput, setTodo, deleteTodo, toggleTodo })(FormContainer)