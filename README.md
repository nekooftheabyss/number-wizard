# number-wizard

A bunch of functions to convert numbers into strings (or other numbers) of
required format.

Some functions work with strings too because I am cool.

## Modules

### AddZero

Add zeroes to a number till they fill a specified digit count.

```ts
import { AddZero } from "https://deno.land/x/numwizard/mod.ts";

console.log(AddZero(1234, 9));
// "000001234"
```

### AddComma

Add zeroes to a number till they fill a specified digit count.

```ts
import { AddComma } from "https://deno.land/x/numwizard/mod.ts";

console.log(AddComma(123456789)); // "123,456,789"
console.log(AddComma(123456789, "in")); // "12,34,56,789"
```

### InWords

Get the given number in words. Kinda buggy rn.

```ts
import { InWords } from "https://deno.land/x/numwizard/mod.ts";

console.log(InWords(1214343484229417, true));
// twelve crore, fourteen lakh, thirty four thousand,
// three hundred and forty eight crore, forty two lakh,
// twenty nine thousand, four hundred and seventeen
```

### Rearrange

Add zeroes to a number till they fill a specified digit count.

```ts
import { Rearrange } from "https://deno.land/x/numwizard/mod.ts";
console.log(Rearrange(324345));
// 324435
```

### RemoveRecurring

Add zeroes to a number till they fill a specified digit count.

```ts
import { RemoveRecurring } from "https://deno.land/x/numwizard/mod.ts";

console.log(RemoveRecurring(453857349734756));
// 4538796
```
