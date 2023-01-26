import { useTodosFromState } from '../../hooks/useTodosFromState'

export const GetArrayForImportance = () => {
	const lowImportantTasks = useTodosFromState('low')
	const middleImportantTasks = useTodosFromState('middle')
	const highImportantTasks = useTodosFromState('high')

	return { lowImportantTasks, middleImportantTasks, highImportantTasks }
}
