# tanbal-utils

A collection of useful and reusable utilities.

## Installation

```bash
npm install tanbal-utils
```

## Utilities

* [`sum`](#sum)
* [`request`](#request)
* [`enterNavigation`](#enternavigation)
* [`formatNumber`](#formatnumber)
* [`parseNumber`](#parsenumber)
* [`showNumber`](#shownumber)
* [`set`](#set)
* [`get`](#get)
* [`toPath`](#topath)
* [`capitalize`](#capitalize)
* [`titleCase`](#titlecase)
* [`validateRef`](#validateref)
* [`validateDate`](#validatedate)
* [`isDigit`](#isdigit)

---

## sum

Calculates the sum of an array, with an optional function for selecting or transforming the value of each item.

```js
import { sum } from 'tanbal-utils';

const total = sum([1, 2, 3, 4]);
// 10
```

A custom selector can be provided:

```js
const total = sum(
    [
        { price: 10 },
        { price: 20 },
        { price: 30 },
    ],
    item => item.price,
);

// 60
```

### Parameters

```js
sum(array, which)
```

* `array` — array of values.
* `which` — function used to get the value from each item. Defaults to the item itself.

---

## request

A wrapper around the native `request` API.

It throws an error when the HTTP response is not successful or when the returned JSON contains an `error` property.

```js
import request from 'tanbal-utils';

const result = await request('/api/users');
```

Options can be passed directly to `request`:

```js
const result = await request('/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
});
```

---

## enterNavigation

Handles Enter-key navigation between multiple input elements.

```js
import { enterNavigation } from 'tanbal-utils';

const cleanup = enterNavigation([
    { ref: firstRef },
    { ref: secondRef },
    { ref: thirdRef },
]);

// Remove event listeners
cleanup();
```

When Enter is pressed, focus moves to the next element. After the last element, `submitCallback` is called.

### Parameters

```js
enterNavigation(refs, submitCallback, condition)
```

* `refs` — array of objects containing refs and optional callbacks/validation.
* `submitCallback` — called after Enter is pressed on the last element.
* `condition` — determines whether Enter navigation is active. Defaults to `() => true`.

Each item in `refs` can contain:

```js
{
    ref,
    callback,
    validation,
    skip,
}
```

* `ref` — element ref.
* `callback` — transforms the element value before validation.
* `validation` — validates the transformed value.
* `skip` — prevents the item from being included in navigation.

---

## formatNumber

Formats a number using the current locale's number formatting.

```js
import { formatNumber } from 'tanbal-utils';

formatNumber(1234567);
// "1,234,567"
```

It also accepts numeric strings:

```js
formatNumber('1234567');
// "1,234,567"
```

---

## parseNumber

Converts a formatted number string into a number.

```js
import { parseNumber } from 'tanbal-utils';

parseNumber('1,234,567');
// 1234567
```

---

## showNumber

Formats a number while allowing custom handling for zero and empty values.

```js
import { showNumber } from 'tanbal-utils';

showNumber(1234567);
// "1,234,567"

showNumber(0);
// "0"

showNumber(null);
// ""
```

A custom value can be provided for zero:

```js
showNumber(0, '-');
// "-"
```

---

## set

Creates a new object with a value set at a nested path without directly mutating the original object.

```js
import { set } from 'tanbal-utils';

const user = {
    name: 'Ali',
};

const result = set(user, 'profile.age', 20);
```

Result:

```js
{
    name: 'Ali',
    profile: {
        age: 20,
    },
}
```

---

## get

Gets a value from an object using a nested path.

```js
import { get } from 'tanbal-utils';

const user = {
    profile: {
        name: 'Ali',
    },
};

get(user, 'profile.name');
// "Ali"
```

Returns `null` when the path cannot be resolved because an intermediate value is `null` or `undefined`.

---

## toPath

Creates a nested object path from multiple keys.

```js
import { toPath } from 'tanbal-utils';

toPath('user', 'profile', 'name');
// "user.profile.name"
```

---

## capitalize

Capitalizes the first character of a string.

```js
import { capitalize } from 'tanbal-utils';

capitalize('hello');
// "Hello"
```

---

## titleCase

Capitalizes the first character of every word in a string.

```js
import { titleCase } from 'tanbal-utils';

titleCase('hello world');
// "Hello World"
```

---

## validateRef

Gets the value of an element from a React ref.

```js
import { validateRef } from 'tanbal-utils';

const value = validateRef(inputRef);
```

A callback can be used to transform the value:

```js
const value = validateRef(
    inputRef,
    value => value.trim(),
);
```

If the ref or its current value does not exist, it returns `null`.

---

## validateDate

Validates a date using `tanbal-persian-date`.

```js
import { validateDate } from 'tanbal-utils';

validateDate({
    year: 1405,
    month: 1,
    day: 1,
});
// true
```

Invalid dates return `false`.

```js
validateDate({
    year: 1405,
    month: 13,
    day: 1,
});
// false
```

---

## isDigit

Checks whether a value is non-empty and can be converted to a number.

```js
import { isDigit } from 'tanbal-utils';

isDigit('123');
// true

isDigit('abc');
// false

isDigit('');
// false
```

---

## Dependencies

This package uses [`tanbal-persian-date`](https://www.npmjs.com/package/tanbal-persian-date) for Persian date validation.

## License

MIT
