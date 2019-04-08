import axios from 'axios';

export function getDataPhotosSuccess(photos) {
    return {
        type: 'GET_DATA_PHOTOS_SUCCESS',
        photos
    }
}

export function getDataPhotosFailed(error) {
    return {
        type: 'GET_DATA_PHOTOS_SUCCESS',
        error
    }
}

export function getDataPhotos() {
    return dispatch => {
        axios
            .get('https://jsonplaceholder.typicode.com/photos')
            .then(photos => dispatch(getDataPhotosSuccess(photos.data)))
            .catch(error => dispatch(getDataPhotosFailed(error)));
    }
}