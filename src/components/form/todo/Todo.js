import React from 'react'
import css from './todo.module.css'
import { TiDelete } from "react-icons/ti"
import { MdOutlineEdit } from 'react-icons/md'

const Todo = ({ todo, deleteTodo, toggleTodo, index, editTodo }) => {
    console.log(todo);
    const onClickEdit = (id) => {
        let changeTask = prompt('Напишите новое задание')
        if (changeTask === '' || changeTask === null) return null;
        editTodo(id, changeTask)
    }


    return (
        <>
            <div className={css.wrapperTodo}>
                <div className={todo.isComplete ? css.complete : css.text} onClick={() => toggleTodo(todo.id)}>
                    <div className={css.task}>
                        <input className={css.inputTask} type="checkbox" checked={todo.isComplete} />
                        <div>
                            {todo.task}
                        </div>
                        {/* {`${index + 1}. ${todo.task}`} if need task with numbering */}
                    </div>
                    <div className={css.time}>
                        {todo.time}
                    </div>
                </div>
                <div>
                    <div className={css.flexButtons}>
                        <button className={css.button} onClick={() => onClickEdit(todo.id)}><MdOutlineEdit className={css.deleteIcon} /></button>
                        <button className={css.button} onClick={() => deleteTodo(todo.id)}><TiDelete className={css.deleteIcon} /></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Todo