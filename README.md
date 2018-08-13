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

Iterates over the provided array and invokes the iteratee on each element. The iteratee is provided the value, index and array.

##### Param

```js
arr: Array;
iteratee: Function;
```

##### Return

```js
void
```

##### Example

```js
forEach([1, 2, 3], (val) => {
  console.log(val);
});
// => 1
// => 2
// => 3

forEach([1], (val, idx, arr) => {
  console.log(`val: ${val} - idx: ${idx} - arr: ${arr}`);
});
// => val: 1 - idx: 0 - arr: 1
```

### fromPairs

Returns an object created from the key:value pairs provided.

##### Param

```js
pairsArr: Array;
```

##### Return

```js
Object;
```

##### Example

```js
fromPairs(['a', 1], ['b', 2]);
// => {a: 1, b: 2}
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

Checks if the value is object like, which is not null and an object.

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
isObjectLike(null);
// => false
isObjectLike([]);
// => true
isObjectLike({});
// => true
```

### isPlainObject

Checks if the value has been created by the Object constructor.

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
class A {}
isPlainObject(new A());
// => false
isPlainObject({});
// => true
```

### keys

Returns an array from the key values from the provided object.

##### Param

```js
obj: Object;
```

##### Return

```js
Array;
```

##### Example

```js
keys('almost-functional');
// => []
keys({a: 1, b: 2});
// ['a', 'b']
```

### last

Returns the last element of an array or undefined

##### Param

```js
...args: Array
```

##### Return

```js
any;
```

##### Example

```js
last([]);
// => undefined
last([1, 2, 3]);
// => 3
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

Recursively searches an object for a specified keys and returns it or null.

##### Param

```js
obj: Object;
```

##### Return

```js
any;
```

##### Example

```js
const pluckObj = pluckDeep({a: {b: {c: 1, d: {e: 'found'}}}});

pluckObj('f');
// => null
pluckObj('e');
// => 'found'
```

### random

Returns a random number between min and max.

##### Param

```js
min: number;
max: number;
```

##### Return

```js
number;
```

##### Example

```js
random(0, 100);
// => 44
```

### remove

Removes all provided elements from the array.

##### Param

```js
...args: Array
```

##### Return

```js
Array;
```

##### Example

```js
remove([1, 2, 3, 4], 1, 2, 3);
// => [4]
remove(['a', 2, 'b', 4], 1, 2, 'b');
// => ['a', 4]
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

Returns all elements of the array expect for the head

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
tail([1, 2, 3]);
// => [2, 3]
```

### toLower

Converts a string to lower case and removes all non-alpha characters

##### Param

```js
text: String;
```

##### Return

```js
string;
```

##### Example

```js
toLower('123ABc!_*&&34:"{}');
// => 'abc'
```

### toUpper

Converts a string to upper case and removes all non-alpha characters

##### Param

```js
text: String;
```

##### Return

```js
string;
```

##### Example

```js
toUpper('--foo-bar');
// => FOOBAR
```
