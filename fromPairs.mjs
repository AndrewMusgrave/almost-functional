const fromPairs = (pairsArr) => {
    const obj = {};

    for (const pair of pairsArr) {
        obj[pair[0]] = pair[1];
    }

    return obj;
}

export default fromPairs;