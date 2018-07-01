const compose = (...fns) => {
    return fns.reduce((f,g) => (...args) => f(g(...args)));
}