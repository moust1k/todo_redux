import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './nav.module.css'

const Nav = () => {

    const classActiveLow = ({ isActive }) => isActive ? css.lowActive : undefined;
    const classActiveMiddle = ({ isActive }) => isActive ? css.middleActive : undefined;
    const classActiveHigh = ({ isActive }) => isActive ? css.highActive : undefined;

    return (
        <>
            <div className={css.navWrapper}>
                <div>
                    <NavLink className={classActiveLow} to="/low">Не срочные</NavLink>
                </div>
                <div>
                    <NavLink className={classActiveMiddle} to="/middle">Средней срочности</NavLink>
                </div>
                <div>
                    <NavLink className={classActiveHigh} to="/high">Срочные</NavLink>
                </div>
            </div>
        </>
    )
}

export default Nav