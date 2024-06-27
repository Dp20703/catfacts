import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { setfact } from '../actions/Fact';

function CatFact() {
    const factstate = useSelector(state => state)
    const dispatch = useDispatch()
    const { fact } = factstate

    const catdata = async () => {
        // const res = await axios.get('https://catfact.ninja/fact')
        //     .catch(error => {
        //         console.log(error)
        //     })
        // // console.log(res.data.fact)
        // dispatch(setfact(res.data.fact))
        dispatch(setfact())
    }

    useEffect(() => {
        catdata()
    }, [])

    return (
        <div className="container  display-flex justify-content-center text-center" style={{ border: "2px solid black",    margin:" 33vh 50vw", borderRadius: '15px', height: 'auto', paddingTop: '15px', width: '30vw', color: "#1e0800", backgroundColor: '#006b807a' }}>
            <h1><u>Random Cat Facts</u></h1>
            {fact && <p><b>{fact}</b></p>}
            <button onClick={catdata} style={{ marginBottom: '23px', backgroundColor: ' rgb(224 153 49)' }}>More Facts</button>
        </div>

    );
}
export default CatFact;