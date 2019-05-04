import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

const persistConfig = {
  key: "root",
  storage
};
const middleware = [thunk];
const composedEnhancers = compose(applyMiddleware(...middleware));

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, {}, composedEnhancers);
export const persistor = persistStore(store);
