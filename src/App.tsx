import './App.css'
import { FC, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LowImportance from './components/pages/LowImportance'
import MiddleImportance from './components/pages/MiddleImortance'
import HighImportance from './components/pages/HighImportance'
import FormContainer from './components/form/FormContainer'
import Modal from './components/modal/Modal'
import ModalFormContainer from './components/form/modalForm/ModalFormContainer'

const App: FC = () => {
	const [active, setActive] = useState<boolean>(false)

	return (
		<div className='App'>
			<FormContainer setActive={setActive} />
			{active && (
				<Modal active={active} setActive={setActive}>
					<ModalFormContainer setActive={setActive} />
				</Modal>
			)}
			<Routes>
				<Route path='/' element={<HighImportance />} />
				<Route path='/low' element={<LowImportance />} />
				<Route path='/middle' element={<MiddleImportance />} />
			</Routes>
		</div>
	)
}

export default App
