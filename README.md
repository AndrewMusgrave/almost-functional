# Almost Functional

Docs are a work in progress.

## Install

```bash
npm install almost-functional
```

## API

### compose

Composes a function that will return the result of invoking the functions in succession where the return value of the previous function is supplied to the next

##### Param

```js
...fns: Array
```

##### Return

```js
Function;
```

##### Example

```js
const square = (n) => n * n;
const mult = (a, b) => a * b;

const multSquare = compose(
  square,
  mult,
);
multSquare(10, 10);
// => 10000
```

### curry

Returns a curried function that is equal to the provided function. Arguments of the curried function do not need to be provided at the same time.

##### Param

```js
fn: Function;
```

##### Return

```js
Function || any;
```

##### Example

```js
const sumFive = curry(
  (a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e,
);

sumFive(1)(1)(1)(1)(1);
// => 5
sumFive(1, 1, 1, 1, 1);
// => 5
sumFive(1, 1)(1, 1, 1, 1);
// => 5
```

### first

Returns the first element in an array or undefined

##### Param

```js
arr: Array;
```

##### Return

```js
any;
```

##### Example

```js
first([1, 2, 3]);
// => 1
first([]);
// => undefined
```

### flatten

Flattens an array one level deep

##### Param

```js
arr: Array;
```

##### Return

```js
Array;
```

##### Example

```js
flatten([1, 2, 3, [4, 5, 6]]);
// => [1, 2, 3, 4, 5, 6]
```

### flattenDeep

Recursively flattens an array

##### Param

```js
arr: Array;
```

##### Return

```js
Array;
```

##### Example

```js
flattenDeep([1, 2, 3, [4, 5, [6, 7, [8, 9]]]]);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### forEach

##### Param

```js
```

##### Return

```js
```

##### Example

```js
```

### fromPairs

##### Param

```js
```

##### Return

```js
```

##### Example

```js
```

### head

Returns the first element in an array or undefined

##### Param

```js
arr: Array;
```

##### Return

```js
any;
```

##### Example

```js
head([1, 2, 3]);
// => 1
head([]);
// => undefined
```

### isFunction

Checks if the value is a function

##### Param

```js
val: any;
```

##### Return

```js
boolean;
```

##### Example

```js
isFunction(() => {});
// => true
isFunction({});
// => false
```

### isObject

Checks if the value is a object

##### Param

```js
val: any;
```

##### Return

```js
boolean;
```

##### Example

```js
isObject({});
// => true
isObject(null);
// => false
isObject(() => {});
// => false
```

### isObjectLike

##### Param

```js
```

##### Return

```js
```

##### Example

```js
```

### isPlainObject

##### Param

```js
```

##### Return

```js
```

##### Example

```js
```

### keys

##### Param

```js
```

##### Return

```js
```

##### Example

```js
```

### last

##### Param

```js
```

##### Return

```js
```

##### Example

```js
```

### merge

Merges the arguments provided.

##### Param

```js
...args: Array
```

##### Return

```js
Object;
```

##### Example

```js
merge({a: 1, b: 2}, {c: 3, d: 4}, {e: 5, f: 6});
// => {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
```

### mergeSafe

Merges the arguments provided, remove all none objects, null, and arrays.

##### Param

```js
...args: Array
```

##### Return

```js
Object;
```

##### Example

```js
merge({a: 1, b: 2}, {c: 3, d: 4}, {e: 5, f: 6}, null, []);
// => {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
```

### pipe

Composes a function that will pipe the result of the invoking function to the next function.

##### Param

```js
...fns: Array
```

##### Return

```js
Function;
```

##### Example

```js
const square = (n) => n * n;
const mult = (a, b) => a * b;

const multSquare = pipe(
  mult,
  square,
);
multSquare(10, 10);
// => 10000
```

### pluckDeep

##### Param

```js
```

##### Return

```js
```

##### Example

```js
```

### random

##### Param

```js
```

##### Return

```js
```

##### Example

```js
```

### remove

##### Param

```js
```

##### Return

```js
```

##### Example

```js
```

### removeFalsy

Returns a new array with all falsy (false, 0, '', "", null, undefined, or NaN) values removed.

##### Param

```js
arr: amy;
```

##### Return

```js
Array;
```

##### Example

```js
removeFalsy([1, 2, 3, false, 0, '', '', null, undefined, NaN, 'hello']);
// =>  [1 , 2, 3, 'hello']
```

### shuffle

Returns a new array, shuffled.

##### Param

```js
list: Array;
```

##### Return

```js
Array;
```

##### Example

```js
shuffle([1, 2, 3, 4, 5]);
// => [2,1,5,3,4]
shuffle([1, 2, 3, 4, 5]);
// => [4,5,1,2,3]
```

### tail

##### Param

```js
```

##### Return

```js
```

##### Example

```js
```

### toLower

##### Param

```js
```

##### Return

```js
```

##### Example

```js
```

### toUpper

##### Param

```js
```

##### Return

```js
```

##### Example

```js
```
