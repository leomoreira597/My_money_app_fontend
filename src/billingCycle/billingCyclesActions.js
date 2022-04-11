import Axios from "axios";


const BASE_URL = 'http://localhost:3003/api'

function getList(){
    const request = Axios.get(`${BASE_URL}/billingCycles`)
    return{
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}