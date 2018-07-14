const isObjectLike = (val) => {
    return val !== null && typeof val === 'object';
}

export default isObjectLike;