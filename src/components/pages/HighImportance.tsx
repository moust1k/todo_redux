import { FC } from 'react'
import PagesCreatorByImportance from './PagesCreatorByImportance'
import { useTodosFromState } from '../../hooks/useTodosFromState'

const HighImportance: FC = () => {
	const arrayHighImportance = useTodosFromState('high')

	return (
		<>
			<PagesCreatorByImportance importanceArray={arrayHighImportance} />
		</>
	)
}

export default HighImportance
