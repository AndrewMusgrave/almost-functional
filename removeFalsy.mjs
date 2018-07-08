const removeFalsy = (array) => {
    let final = [];

    if (array == null) {
        return final;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            final.push(array[i]);
        }
    }

    return final;
}

export default removeFalsy;