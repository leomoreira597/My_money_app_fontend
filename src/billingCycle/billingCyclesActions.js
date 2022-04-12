import Axios from "axios";


const BASE_URL = 'http://localhost:3003/api'

export function getList(){
    const request = Axios.get(`${BASE_URL}/billingCycles`)
    return{
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){
    Axios.post(`${BASE_URL}/billingCycles`, values)
    return{
        type: 'TEMP '
    }
}