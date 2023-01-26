import { FC } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { actions } from '../../reducers/mainReducer'
import { AppStateType } from '../../store'
import { TodoType } from '../../types/types'
import { GetArrayForImportance } from '../helpers/GetArrayForImportance'

type PropsType = {
	todos: TodoType[]
	setActive: (value: boolean) => void
	deleteAllTodo: () => void
}

const { deleteAllTodo } = actions

const FormContainer: FC<PropsType> = props => {
	const { lowImportantTasks, middleImportantTasks, highImportantTasks } = GetArrayForImportance()

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
