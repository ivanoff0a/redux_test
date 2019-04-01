import{applyMiddleware, createStore} from 'redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function configureStore(){
    const store = createStore(rootReducer, applyMiddleware(composeWithDevTools(thunk)));
    return store
}