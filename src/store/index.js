import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./authReducer";
import { requestBodyReducer } from "./requestBodyReducer";
import { screenReducer } from "./screenReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    requestBody: requestBodyReducer,
    screenSize: screenReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());
