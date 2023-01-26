import { useState } from 'react'
import { Content } from 'antd/es/layout/layout'
import { theme } from 'antd'
import { Route, Routes } from 'react-router-dom'
import LowImportance from '../pages/LowImportance'
import MiddleImportance from '../pages/MiddleImportance'
import HighImportance from '../pages/HighImportance'
import FormContainer from '../form/FormContainer'
import Modal from '../modal/Modal'
import ModalFormContainer from '../form/modalForm/ModalFormContainer'

export const MainBody = () => {
	const [active, setActive] = useState<boolean>(false)

	const {
		token: { colorBgContainer }
	} = theme.useToken()

	return (
		<>
			<Content className='site-layout' style={{ padding: '0 50px', textAlign: 'center' }}>
				<div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>
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
			</Content>
		</>
	)
}
