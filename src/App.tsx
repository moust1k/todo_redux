import 'antd/dist/reset.css'
import { FC } from 'react'
import { Layout } from 'antd'
import Nav from './components/nav/Nav'
import { MainBody } from './components/content/MainBody'

const App: FC = () => {
	return (
		<Layout>
			<Nav />
			<MainBody />
		</Layout>
	)
}

export default App
