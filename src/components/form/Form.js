import React from 'react'
import css from './form.module.css'
import Nav from '../nav/Nav';

const Form = ({ todos, setActive, lowImportantTasks, middleImportantTasks, highImportantTasks, deleteAllTodo }) => {

    let deleteAndConfirm = () => {
        let ask = window.confirm('Вы действительно хотите удалить все задания?')
        if (ask) {
            deleteAllTodo()
        }
    }

    return (
        <div>
            {todos.length > 0
                ? <div className={css.wrapperTasks}>
                    <p>Не срочные: {lowImportantTasks.length}</p>
                    <p>Cредней срочности: {middleImportantTasks.length}</p>
                    <p>Срочные: {highImportantTasks.length}</p>
                </div>
                : <h2>Напишите ваше первое задание</h2>}
            <div className={css.formWrapper}>
                <button onClick={() => setActive(true)} className={css.buttonStyle}>Добавить задание</button>
                <button className={css.buttonStyle} onClick={deleteAndConfirm}>Удалить все задания</button>
            </div>
            <Nav />
        </div>
    )
}

export default Form