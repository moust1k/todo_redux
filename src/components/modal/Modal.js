import React from 'react'
import css from './modal.module.css'


const Modal = ({ active, setActive, children }) => {
    return (
        <div onClick={() => setActive(false)} className={active ? `${css.modal} + ${css.active}` : css.modal}>
            <div onClick={e => e.stopPropagation()} className={active ? `${css.modalContent} + ${css.active}` : css.modalContent}>
                {children}
            </div>
        </div>
    )
}

export default Modal