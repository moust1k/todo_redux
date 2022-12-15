import React from 'react'
import css from './form.module.css'
import Todo from './todo/Todo';

const Form = ({ setTodo, setUserInput, userInput, todos, deleteTodo, toggleTodo, editTodo }) => {


    let handleOnSubmit = (e) => {
        e.preventDefault()
        setTodo()
    }

    let handleInput = (e) => {
        let input = e.target.value;
        setUserInput(input);
    }


    return (
        <div>
            {todos.length !== 0 ? <h1 className={css.numberOfAssigments}>Количество заданий: {todos.length}</h1> : <h2>Напишите ваше первое задание</h2>}
            <form className={css.formWrapper} onSubmit={handleOnSubmit}>
                <input value={userInput} placeholder='Введите задачу...' type="text" onChange={handleInput} />
                <button>Добавить</button>
            </form>
            {todos.map((todo, index) => < Todo
                key={todo.id}
                index={index}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
            />)}
        </div>
    )
}

export default Form