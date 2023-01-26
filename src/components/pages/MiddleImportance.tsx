import { FC } from 'react'
import PagesCreatorByImportance from './PagesCreatorByImportance'
import { GetArrayForImportance } from '../helpers/GetArrayForImportance'

const MiddleImportance: FC = () => {
	const { middleImportantTasks } = GetArrayForImportance()

	return (
		<>
			<PagesCreatorByImportance importanceArray={middleImportantTasks} />
		</>
	)
}

export default MiddleImportance
