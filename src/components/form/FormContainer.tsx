import { FC } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { actions } from '../../reducers/mainReducer'
import { AppStateType } from '../../store'
import { TodoType } from '../../types/types'

type PropsType = {
	todos: TodoType[]
	setActive: (value: boolean) => void
	deleteAllTodo: () => void
}

const { deleteAllTodo } = actions

const FormContainer: FC<PropsType> = props => {
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

let mapStateToProps = (state: AppStateType) => {
	return {
		todos: state.mainReducer.todos
	}
}

export default connect(mapStateToProps, { deleteAllTodo })(FormContainer)
