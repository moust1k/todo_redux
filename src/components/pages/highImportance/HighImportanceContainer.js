import { connect } from 'react-redux'
import React from 'react'
import HighImportance from './HighImportance'
import { deleteTodo, toggleTodo, editTodo, deleteAllTodo } from '../../../reducers/mainReducer'

const HighImportanceContainer = (props) => {

    let arrayHighImportance = props.todos.filter(todo => todo.importance === 'high')

    return (
        <HighImportance
            setActive={props.setActive}
            todos={arrayHighImportance}
            deleteTodo={props.deleteTodo}
            deleteAllTodo={props.deleteAllTodo}
            toggleTodo={props.toggleTodo}
            editTodo={props.editTodo}
        />)
}

let mapStateToProps = (state) => {
    return {
        todos: state.mainReducer.todos
    }
}

export default connect(mapStateToProps, { deleteTodo, toggleTodo, editTodo, deleteAllTodo })(HighImportanceContainer) 