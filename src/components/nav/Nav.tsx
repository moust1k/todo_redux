import { Layout, Menu } from 'antd'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import css from './nav.module.css'

const { Header } = Layout

const Nav: FC = () => {
	return (
		<>
			<Header className={css.header}>
				<Menu className={css.menuWrapper} theme='dark' mode='horizontal' defaultSelectedKeys={['/']}>
					<Menu.Item key='/'>
						<NavLink to='/' className={css.link}>
							Срочные
						</NavLink>
					</Menu.Item>
					<Menu.Item key='/middle'>
						<NavLink to='/middle' className={css.link}>
							Средней срочности
						</NavLink>
					</Menu.Item>
					<Menu.Item key='/low'>
						<NavLink to='/low' className={css.link}>
							Не срочные
						</NavLink>
					</Menu.Item>
				</Menu>
			</Header>
		</>
	)
}

export default Nav
