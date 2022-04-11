import { combineReducers } from "redux";
import DashBoardReducer from "../dashBoard/dashBoardReducer";
import TabReducer from "../common/tab/tabReducer";
import BillingCycleReducer from "../billingCycle/billingCycleReducer";

const rootReducer = combineReducers({
    dashBoard: DashBoardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer
})

export default rootReducer