import React from 'react'
import css from './todo.module.css'
import { TiDelete } from "react-icons/ti"

const Todo = ({ todo, deleteTodo, toggleTodo, index }) => {
    return (
        <>
            <div className={css.wrapperTodo}>
                <div className={todo.isComplete ? css.complete : css.text} onClick={() => toggleTodo(todo.id)}>
                    {`${index + 1}. ${todo.task}`}
                </div>
                <div>
                    <button className={css.button} onClick={() => deleteTodo(todo.id)}><TiDelete className={css.deleteIcon} /></button>
                </div>
            </div>

        </>
    )
}

export default Todo