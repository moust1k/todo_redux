import { connect } from 'react-redux'
import { setTodo } from '../../../reducers/mainReducer'
import ModalForm from './ModalForm'


const ModalFormContainer = (props) => {

    return (
        <ModalForm
            setActive={props.setActive}
            setTodo={props.setTodo}
        />
    )
}


export default connect(null, { setTodo })(ModalFormContainer)