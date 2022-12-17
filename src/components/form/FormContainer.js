import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { setUserInput, setTodo, deleteTodo, toggleTodo, editTodo, deleteAllTodo } from '../../reducers/mainReducer'




const FormContainer = (props) => {

    return (
        <Form
            setTodo={props.setTodo}
            setUserInput={props.setUserInput}
            userInput={props.userInput}
            todos={props.todos}
            deleteTodo={props.deleteTodo}
            deleteAllTodo={props.deleteAllTodo}
            toggleTodo={props.toggleTodo}
            editTodo={props.editTodo}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        userInput: state.mainReducer.userInput,
        todos: state.mainReducer.todos,
        jsonTodos: state.mainReducer.jsonTodos,
    }
}

export default connect(mapStateToProps, { setUserInput, setTodo, deleteTodo, toggleTodo, editTodo, deleteAllTodo })(FormContainer)