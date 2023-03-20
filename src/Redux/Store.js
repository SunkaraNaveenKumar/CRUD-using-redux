import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { ReducerState } from "./Reducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      crudState: ReducerState,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
