import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import css from './nav.module.css'

const Nav: FC = () => {
	return (
		<>
			<div className={css.navWrapper}>
				<div>
					<NavLink className={({ isActive }) => (isActive ? css.highActive : undefined)} to='/'>
						Срочные
					</NavLink>
				</div>
				<div>
					<NavLink className={({ isActive }) => (isActive ? css.middleActive : undefined)} to='/middle'>
						Средней срочности
					</NavLink>
				</div>
				<div>
					<NavLink className={({ isActive }) => (isActive ? css.lowActive : undefined)} to='/low'>
						Не срочные
					</NavLink>
				</div>
			</div>
		</>
	)
}

export default Nav
