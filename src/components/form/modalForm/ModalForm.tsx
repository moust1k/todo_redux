import { FC } from 'react'
import { PropsType } from './ModalFormContainer'
import css from './modalForm.module.css'
import { Formik, Form, Field } from 'formik'
import { Space } from 'antd'

type InitialValues = {
	task: string
	importance: string
}
type Errors = {
	task?: string
}

const ModalForm: FC<PropsType> = ({ setActive, setTodo }) => {
	const initialValues: InitialValues = { task: '', importance: 'high' }

	return (
		<>
			<Formik
				initialValues={initialValues}
				validate={values => {
					const errors: Errors = {}
					if (!values.task) {
						errors.task = 'Enter message post...'
					}
					return errors
				}}
				onSubmit={values => {
					setTodo(values.task, values.importance)
					setActive(false)
				}}>
				{() => (
					<Form>
						<div className='mb-3'>
							<label htmlFor='formGroupExampleInput' className='form-label'>
								Напишите задание
							</label>
							<Field className='form-control' type={'text'} name={'task'} placeholder={'Введите задание...'} />
						</div>
						<Field className='form-select' as='select' name={'importance'}>
							<option value='high'>Срочные</option>
							<option value='middle'>Средней срочности</option>
							<option value='low'>Не срочные</option>
						</Field>
						<div className={css.buttons}>
							<Space>
								<button type={'submit'} className='btn btn-primary'>
									Добавить
								</button>
								<button type='button' onClick={() => setActive(false)} className='btn btn-secondary'>
									Отмена
								</button>
							</Space>
						</div>
					</Form>
				)}
			</Formik>
		</>
	)
}

export default ModalForm
