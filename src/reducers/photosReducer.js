export function photos(state = {}, action) {
    switch(action.type) {
        case 'GET_DATA_PHOTOS_SUCCESS':
            return action.photos;
            break;
        case 'GET_DATA_PHOTOS_FAILED':
            return action.error;
            break;
        default:
            return state;
    }
}