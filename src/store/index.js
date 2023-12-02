import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./authReducer";
import { requestBodyReducer } from "./requestBodyReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    requestBody: requestBodyReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());
