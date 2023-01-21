import { PropertiesType } from '../store'
import { TodoType } from '../types/types'

let initialState = {
	todos: [] as Array<TodoType>
}

type InitialStateType = typeof initialState
type ActionsTypes = PropertiesType<typeof actions>

const mainReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case 'ADD_TODO':
			let newTodo = {
				id: Math.random().toString(36).substr(2, 9),
				task: action.task,
				isComplete: false,
				importance: action.importance,
				time: new Date().toLocaleString()
			}
			return {
				...state,
				todos: [...state.todos, newTodo]
			}

		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.id)
			}
		case 'TOGGLE_TODO':
			return {
				...state,
				todos: state.todos.map(todo => (todo.id === action.id ? { ...todo, isComplete: !todo.isComplete } : { ...todo }))
			}
		case 'EDIT_TODO':
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === action.id) {
						todo.task = action.task
						todo.time = new Date().toLocaleString()
						todo.isComplete = false
					}
					return todo
				})
			}
		case 'DELETE_ALL_TODO':
			return {
				...state,
				todos: []
			}
		default:
			return state
	}
}

export const actions = {
	setTodo: (task: string, importance: string) => ({ type: 'ADD_TODO', task, importance } as const),
	deleteTodo: (id: string) => ({ type: 'DELETE_TODO', id } as const),
	toggleTodo: (id: string) => ({ type: 'TOGGLE_TODO', id } as const),
	editTodo: (id: string, task: string) => ({ type: 'EDIT_TODO', id, task } as const),
	deleteAllTodo: () => ({ type: 'DELETE_ALL_TODO' } as const)
}

export default mainReducer
