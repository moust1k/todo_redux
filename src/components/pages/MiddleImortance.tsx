import { FC } from 'react'
import PagesCreatorByImportance from './PagesCreatorByImportance'
import { useTodosFromState } from '../../hooks/useTodosFromState'

const MiddleImportance: FC = () => {
	const arrayMiddleImportance = useTodosFromState('middle')

	return (
		<>
			<PagesCreatorByImportance importanceArray={arrayMiddleImportance} />
		</>
	)
}

export default MiddleImportance
