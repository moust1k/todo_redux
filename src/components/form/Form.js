import React from 'react'
import css from './form.module.css'
import Todo from './todo/Todo';

const Form = ({ setTodo, setUserInput, userInput, todos, deleteTodo, toggleTodo, editTodo, deleteAllTodo }) => {

    let handleOnSubmit = (e) => {
        e.preventDefault()
        setTodo()
    }

    let setTodoValue = (e) => {
        let input = e.target.value;
        setUserInput(input);
    }


    return (
        <div>
            {todos.length > 0 ? <h1 className={css.numberOfAssigments}>Количество заданий: {todos.length}</h1> : <h2>Напишите ваше первое задание</h2>}
            <form className={css.formWrapper} onSubmit={handleOnSubmit}>
                <input value={userInput} required placeholder='Введите задачу...' type="text" onChange={setTodoValue} />
                <button className={css.buttonStyle}>Добавить</button>
            </form>
            {todos.map((todo, index) =>
                <Todo
                    key={todo.id}
                    index={index}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo} />
            )}
            {todos.length > 0 && <button className={css.buttonStyle} onClick={() => deleteAllTodo()}>Удалить все задачи</button>}
        </div>
    )
}

export default Form