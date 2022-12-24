import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { deleteAllTodo } from '../../reducers/mainReducer'




const FormContainer = (props) => {

    let lowImportantTasks = props.todos.filter(todo => todo.importance === 'low')
    let middleImportantTasks = props.todos.filter(todo => todo.importance === 'middle')
    let highImportantTasks = props.todos.filter(todo => todo.importance === 'high')

    return (
        <Form
            lowImportantTasks={lowImportantTasks}
            middleImportantTasks={middleImportantTasks}
            highImportantTasks={highImportantTasks}
            setActive={props.setActive}
            todos={props.todos}
            deleteAllTodo={props.deleteAllTodo}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        todos: state.mainReducer.todos,
    }
}

export default connect(mapStateToProps, { deleteAllTodo })(FormContainer)