import { FC } from 'react'
import PagesCreatorByImportance from './PagesCreatorByImportance'
import { useTodosFromState } from '../../hooks/useTodosFromState'

const LowImportance: FC = () => {
	const arrayLowImportance = useTodosFromState('low')

	return (
		<>
			<PagesCreatorByImportance importanceArray={arrayLowImportance} />
		</>
	)
}

export default LowImportance
