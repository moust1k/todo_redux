import React from 'react'
import css from './todo.module.css'
import { TiDelete } from 'react-icons/ti'
import { MdOutlineEdit } from 'react-icons/md'
import { TodoType } from '../../types/types'
import { Card } from 'antd'
import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { Typography } from 'antd'

type PropsType = {
	todo: TodoType
	index?: number

	deleteTodo: (id: string) => void
	toggleTodo: (id: string) => void
	editTodo: (id: string, task: string) => void
}

const Todo: React.FC<PropsType> = ({ todo, deleteTodo, toggleTodo, index, editTodo }) => {
	const onClickEdit = (id: string) => {
		let changeTask = prompt('Напишите новое задание', todo.task)
		if (changeTask === '' || changeTask === null) return null
		editTodo(id, changeTask)
	}

	return (
		<>
			<Card title={todo.time} className={css.wrapperTodo}>
				<div className={todo.isComplete ? css.complete : css.text} onClick={() => toggleTodo(todo.id)}>
					<div className={css.task}>
						<Checkbox checked={todo.isComplete} className={css.inputTask} />
						<Typography.Text className={css.textWidth} strong>
							{todo.task}
						</Typography.Text>
						<div className={css.buttonsWrapper}>
							<button className={css.button} onClick={() => onClickEdit(todo.id)}>
								<MdOutlineEdit className={css.deleteIcon} />
							</button>
							<button className={css.button} onClick={() => deleteTodo(todo.id)}>
								<TiDelete className={css.deleteIcon} />
							</button>
						</div>
					</div>
				</div>
			</Card>
		</>
	)

	// return (
	// 	<>
	// 		<div className={css.wrapperTodo}>
	// 			<div className={todo.isComplete ? css.complete : css.text} onClick={() => toggleTodo(todo.id)}>
	// 				<div className={css.task}>
	// 					<input onChange={() => {}} className={css.inputTask} type='checkbox' checked={todo.isComplete} />
	// 					<div>{todo.task}</div>
	// 					{/* {`${index + 1}. ${todo.task}`} if need task with numbering */}
	// 				</div>
	// 				<div className={css.time}>{todo.time}</div>
	// 			</div>
	// 			<div>
	// 				<div className={css.flexButtons}>
	// 					<button className={css.button} onClick={() => onClickEdit(todo.id)}>
	// 						<MdOutlineEdit className={css.deleteIcon} />
	// 					</button>
	// 					<button className={css.button} onClick={() => deleteTodo(todo.id)}>
	// 						<TiDelete className={css.deleteIcon} />
	// 					</button>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</>
	// )
}

export default Todo
