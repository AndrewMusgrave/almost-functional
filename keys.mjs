import isObject from './isObject';

const keys = obj => {
    if (!isObject(obj) || Array.isArray(obj)) {
        return [];
    }

    return Object.keys(obj);
}

export default keys;