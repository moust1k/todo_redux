import { FC } from 'react'
import { TodoType } from '../../types/types'
import Todo from '../todo/Todo'
import css from './generalStyles.module.css'
import { actions } from '../../reducers/mainReducer'
import { connect } from 'react-redux'

type PropsType = {
	importanceArray: TodoType[]

	deleteTodo: (id: string) => void
	toggleTodo: (id: string) => void
	editTodo: (id: string, task: string) => void
}
const { deleteTodo, toggleTodo, editTodo } = actions

const PagesCreatorByImportance: FC<PropsType> = ({ importanceArray, deleteTodo, toggleTodo, editTodo }) => {
	return (
		<>
			{importanceArray.length <= 0 && <div className={css.output}>Напишите ваше первое задание</div>}
			<div className={css.wrapperTodo}>
				{importanceArray.map(todo => (
					<Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
				))}
			</div>
		</>
	)
}

export default connect(null, { deleteTodo, toggleTodo, editTodo })(PagesCreatorByImportance)
