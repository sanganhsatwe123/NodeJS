import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";
import authReducer from "./authReducer";
import userReducer from "./userReducer";


const commonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2
}


const authConfig = {
    ...commonConfig,
    key: 'auth',
    whiteList: ['isLoggedIn', 'token'],
}

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    user: userReducer,

})

export default rootReducer;