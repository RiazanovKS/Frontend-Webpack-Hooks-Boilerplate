import * as _ from 'utils/lodash'

export const createReducer = (reducerFunction, reducerName) => (
  state,
  action
) => {
  const isInitializationCall = state === undefined

  const name = _.get(action, 'meta.name')

  if (name !== reducerName && !isInitializationCall) return state

  return reducerFunction(state, action)
}