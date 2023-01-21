import { FC } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../reducers/mainReducer'
import ModalForm from './ModalForm'

export type PropsType = {
	setActive: (value: boolean) => void
	setTodo: (task: string, importance: string) => void
}
const { setTodo } = actions

const ModalFormContainer: FC<PropsType> = ({ setActive, setTodo }) => {
	return <ModalForm setActive={setActive} setTodo={setTodo} />
}

export default connect(null, { setTodo })(ModalFormContainer)
