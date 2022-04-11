import { combineReducers } from "redux";
import DashBoardReducer from "../dashBoard/dashBoardReducer";
import TabReducer from "../common/tab/tabReducer";

const rootReducer = combineReducers({
    dashBoard: DashBoardReducer,
    tab: TabReducer
})

export default rootReducer