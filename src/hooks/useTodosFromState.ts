import { useSelector } from 'react-redux'
import { AppStateType } from '../store/index'
import { TodoType } from '../types/types'

export const useTodosFromState = (importance: string): TodoType[] => {
	const todos = useSelector((state: AppStateType) => state.mainReducer.todos)
	return todos.filter(todo => todo.importance === importance)
}
