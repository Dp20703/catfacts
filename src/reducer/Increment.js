

const intialState = { fact: [] }

const reducerFunction = (state = intialState, action) => {
    if (action.type === 'SET_FACTS') {
        return { ...state, fact: action.payload }
    };
    return state
}
export default reducerFunction;