import { combineReducers } from "redux";
import DashBoardReducer from "../dashBoard/dashBoardReducer";

const rootReducer = combineReducers({
    dashBoard: DashBoardReducer
})

export default rootReducer