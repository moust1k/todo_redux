import React from 'react'
import css from './form.module.css'
import { TodoType } from '../../types/types'
import { Button, Space } from 'antd'
import { Typography, Divider } from 'antd'

const { Text, Title } = Typography

type PropsType = {
	todos: TodoType[]
	middleImportantTasks: TodoType[]
	lowImportantTasks: TodoType[]
	highImportantTasks: TodoType[]

	setActive: (value: boolean) => void
	deleteAllTodo: () => void
}

const Form: React.FC<PropsType> = ({ todos, setActive, lowImportantTasks, middleImportantTasks, highImportantTasks, deleteAllTodo }) => {
	let deleteAndConfirm = () => {
		let ask = window.confirm('Вы действительно хотите удалить все задания?')
		if (ask) {
			deleteAllTodo()
		}
	}

	// TODO поработать над адаптивностью для мобильных

	return (
		<div>
			{todos.length > 0 ? (
				<div className={css.wrapperTasks}>
					<div className={css.flexForTasks}>
						<Text className={css.tasks} type='danger' strong>
							Срочные: {highImportantTasks.length}
						</Text>
						<Text className={css.tasks} type='warning' strong>
							Cредней срочности: {middleImportantTasks.length}
						</Text>
						<Text className={css.tasks} type='success' strong>
							Не срочные: {lowImportantTasks.length}
						</Text>
					</div>
				</div>
			) : (
				<Title className={css.title} italic level={2}>
					Напишите ваше первое задание
				</Title>
			)}

			<div className={css.formWrapper}>
				<Button className={`${css.button} ${css.addTask}`} onClick={() => setActive(true)} size='large' type='primary'>
					Добавить задание
				</Button>
				<Button className={css.button} type='primary' danger size='large' onClick={deleteAndConfirm}>
					Удалить все задания
				</Button>
			</div>
		</div>
	)
}

export default Form
