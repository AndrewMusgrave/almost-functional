const pipe = (...fns) => {
    return fns.reduceRight((f,g) => (...args) => f(g(...args)));
}

export default pipe;