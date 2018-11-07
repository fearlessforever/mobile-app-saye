import { createStore , combineReducers , applyMiddleware} from 'redux'
import loginAction from './loginStore'
import pageAction from './pageStore'

const reducers = combineReducers({
  loginAction,pageAction
});
const store = createStore(reducers);

export default store;