import { connect } from 'react-redux'
import React from 'react'
import MiddleImportance from './MiddleImportance'
import { deleteTodo, toggleTodo, editTodo, deleteAllTodo } from '../../../reducers/mainReducer'

const MiddleImportanceContainer = (props) => {

    let arrayMiddleImportance = props.todos.filter(todo => todo.importance === 'middle')

    return (
        <MiddleImportance
            setActive={props.setActive}
            todos={arrayMiddleImportance}
            deleteTodo={props.deleteTodo}
            deleteAllTodo={props.deleteAllTodo}
            toggleTodo={props.toggleTodo}
            editTodo={props.editTodo}
        />
    )
}


let mapStateToProps = (state) => {
    return {
        todos: state.mainReducer.todos
    }
}

export default connect(mapStateToProps, { deleteTodo, toggleTodo, editTodo, deleteAllTodo })(MiddleImportanceContainer)