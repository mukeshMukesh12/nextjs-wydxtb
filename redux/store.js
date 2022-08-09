import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";

function confStore(state) {
  return createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__(),
    state,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
export const wrapper = createWrapper(confStore);
