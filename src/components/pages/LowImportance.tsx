import { FC } from 'react'
import PagesCreatorByImportance from './PagesCreatorByImportance'
import { GetArrayForImportance } from '../helpers/GetArrayForImportance'

const LowImportance: FC = () => {
	const { lowImportantTasks } = GetArrayForImportance()

	return (
		<>
			<PagesCreatorByImportance importanceArray={lowImportantTasks} />
		</>
	)
}

export default LowImportance
