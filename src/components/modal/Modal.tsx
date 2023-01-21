import React from 'react'
import css from './modal.module.css'

type PropsType = {
	active: boolean
	setActive: (boolean: boolean) => void
	children: JSX.Element[] | JSX.Element
}

const Modal: React.FC<PropsType> = ({ active, setActive, children }) => {
	return (
		<div onClick={() => setActive(false)} className={active ? `${css.modal} + ${css.active}` : css.modal}>
			<div onClick={e => e.stopPropagation()} className={active ? `${css.modalContent} + ${css.active}` : css.modalContent}>
				{children}
			</div>
		</div>
	)
}

export default Modal
