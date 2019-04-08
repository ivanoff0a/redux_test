export function todos(state = {}, action) {
    switch(action.type) {
        case 'GET_DATA_TODOS_SUCCESS':
            return action.todos;
            break;
        case 'GET_DATA_TODOS_FAILED':
            return action.error;
            break;
        default:
            return state;
    }
}