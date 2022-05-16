# number-wizard
A bunch of functions to convert numbers into strings of required format.

## How to run
```js
import {AddComma, AddZero} from "https://deno.land/x/numwizard@v1.0.0/mod.ts"

// Add Commas
AddComma(123456789) // "123,456,789"
AddComma(123456789, "in") // "12,34,56,789"

// Add Zeros
AddZero(1234, 9) // "000001234"
```