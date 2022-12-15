import React from 'react'
import css from './todo.module.css'
import { TiDelete } from "react-icons/ti"
import { MdOutlineEdit } from 'react-icons/md'

const Todo = ({ todo, deleteTodo, toggleTodo, index, editTodo }) => {

    const onClickEdit = (id) => {
        let changeTask = prompt('Напишите новое задание')
        if (changeTask === '' || changeTask === null) return null;
        editTodo(id, changeTask)
    }

    return (
        <>
            <div className={css.wrapperTodo}>
                <div className={todo.isComplete ? css.complete : css.text} onClick={() => toggleTodo(todo.id)}>
                    {`${index + 1}. ${todo.task}`}
                </div>
                <div>
                    <div>
                        <button className={css.button} onClick={() => onClickEdit(todo.id)}><MdOutlineEdit className={css.deleteIcon} /></button>
                        <button className={css.button} onClick={() => deleteTodo(todo.id)}><TiDelete className={css.deleteIcon} /></button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Todo