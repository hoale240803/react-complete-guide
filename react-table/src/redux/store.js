import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";

// middlewares được gửi vào trong store để
//caputer các the changed actions và display them
// const middlewares = [logger];
// const middlewares = [chunk];

const sagaMiddlewares = createSagaMiddleware();
const middlewares = [sagaMiddlewares];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// store này dùng để lưu toàn bộ state trong app của chúng ta
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddlewares.run(rootSaga);

export const persistor = persistStore(store);
