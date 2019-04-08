import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import {todos} from './todosReducer'
import {photos} from './photosReducer'

export default combineReducers({
    page,
    user,
    todos,
    photos
})