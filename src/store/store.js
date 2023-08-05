import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./reducer/login";
import counterReducer from "./reducer/counter";

const storeToLocalStorage = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('redux_store', JSON.stringify(getState()));
    return result;
  }
}

const store = configureStore({
  reducer: {
    loginReducer,
    counterReducer
  },
  devTools: true,
  preloadedState: (function () {
    if (localStorage.getItem('redux_store') !== null) {
      return JSON.parse(localStorage.getItem('redux_store'));
    }
  })(),
  middleware: defaultMiddlewares => defaultMiddlewares().concat(storeToLocalStorage),
});

// store.subscribe(() => console.log('Loaded the store', store.getState()));

export default store;