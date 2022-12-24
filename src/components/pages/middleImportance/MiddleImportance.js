import React from 'react'
import Todo from '../../form/todo/Todo'
import css from '../generalStyles.module.css'

const MiddleImportance = (props) => {

    return (
        <>
            {props.todos.length <= 0 && <div className={css.output}>Напишите ваше первое задание</div>}
            {props.todos.map((todo) =>
                <Todo
                    setActive={props.setActive}
                    key={todo.id}
                    todo={todo}
                    deleteTodo={props.deleteTodo}
                    toggleTodo={props.toggleTodo}
                    editTodo={props.editTodo}
                />
            )}
        </>
    )
}

export default MiddleImportance