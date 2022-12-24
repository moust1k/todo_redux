import { connect } from 'react-redux'
import LowImportance from './LowImportance'
import { deleteTodo, toggleTodo, editTodo, deleteAllTodo } from '../../../reducers/mainReducer'

const LowImportanceContainer = (props) => {

    let arrayLowImportance = props.todos.filter(todo => todo.importance === 'low')

    return (
        <LowImportance
            setActive={props.setActive}
            todos={arrayLowImportance}
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

export default connect(mapStateToProps, { deleteTodo, toggleTodo, editTodo, deleteAllTodo })(LowImportanceContainer)