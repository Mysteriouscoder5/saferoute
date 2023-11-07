import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const preloadedState = {};

export default () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
    preloadedState,
  });

  const persistor = persistStore(store);

  return { store, persistor };
};
