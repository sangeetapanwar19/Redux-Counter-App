import { createStore } from "redux";
import rootReducer from "./reducers";
import { compose } from "redux";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose
);

export default store;