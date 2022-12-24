import React from 'react'
import css from './modalForm.module.css'
import { Formik, Form, Field } from 'formik'

const ModalForm = ({ setActive, setTodo }) => {

    return (
        <>
            <Formik
                initialValues={{ task: '', importance: 'low' }}
                validate={values => {
                    const errors = {};
                    if (!values.task) {
                        errors.task = 'Enter message post...';
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    setTodo(values.task, values.importance)
                    setActive(false)
                }}>
                {() => (
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput" className="form-label">Напишите задание</label>
                            <Field className="form-control" type={'text'} name={'task'} placeholder={'Введите задание...'} />
                        </div>
                        <Field className="form-select" as="select" name={'importance'}>
                            <option value="low">Не срочные</option>
                            <option value="middle">Средней срочности</option>
                            <option value="high">Срочные</option>
                        </Field>
                        <div className={css.buttons}>
                            <button type={'submit'} className="btn btn-primary">Добавить</button>
                            <button type="button" onClick={() => setActive(false)} className="btn btn-secondary">Отмена</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default ModalForm