const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const DELETE_ALL_TODO = 'DELETE_ALL_TODO';


let initialState = {
    todos: [],
}

const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            let newTodo = {
                id: Math.random().toString(36).substr(2, 9),
                task: action.task,
                isComplete: false,
                importance: action.importance,
                time: new Date().toLocaleString(),
            }
            return {
                ...state,
                todos: [...state.todos, newTodo],

            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id ? { ...todo, isComplete: !todo.isComplete } : { ...todo }),
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        todo.task = action.task
                        todo.time = new Date().toLocaleString();
                        todo.isComplete = false;
                    }
                    return todo;
                })
            }
        case DELETE_ALL_TODO:
            return {
                ...state,
                todos: [],
            }
        default:
            return state;
    }
}


export const setTodo = (task, importance) => ({ type: ADD_TODO, task, importance })
export const deleteTodo = (id) => ({ type: DELETE_TODO, id })
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id })
export const editTodo = (id, task) => ({ type: EDIT_TODO, id, task })
export const deleteAllTodo = () => ({ type: DELETE_ALL_TODO })

export default mainReducer;