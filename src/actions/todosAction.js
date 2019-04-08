import axios from 'axios'

export function getDataTodosSuccess(todos) {
    return {
        type: 'GET_DATA_TODOS_SUCCESS',
        todos
    }
}

export function getDataTodosFailed(error) {
    return {
        type: 'GET_DATA_TODOS_FAILED',
        error
    }
}

export function getDataTodos() {
    return dispatch => {
        axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then( todos => dispatch(getDataTodosSuccess(todos.data)))
            .catch( error => dispatch(getDataTodosFailed(error)));
    }
}