import { combineReducers } from "redux";

// import slice reducers
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  user: userSlice,
});

export default rootReducer;
