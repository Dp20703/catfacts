import axios from "axios"
export const setfact = () => async (dispatch) => {
    const res = await axios.get('https://catfact.ninja/fact')
    dispatch({
        type: 'SET_FACTS',
        payload: res.data.fact
    })
}