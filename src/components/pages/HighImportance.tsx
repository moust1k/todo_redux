import { FC } from 'react'
import PagesCreatorByImportance from './PagesCreatorByImportance'
import { GetArrayForImportance } from '../helpers/GetArrayForImportance'

const HighImportance: FC = () => {
	const { highImportantTasks } = GetArrayForImportance()

	return (
		<>
			<PagesCreatorByImportance importanceArray={highImportantTasks} />
		</>
	)
}

export default HighImportance
