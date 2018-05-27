# Serializable Error

Enhances `Error.prototype` with a `toJSON()` method so that errors can be
serialized without explicit transformation.

## Installation

```
npm install serializable-error
```

## Usage

You only need to `import` (or `require()`) `'serializable-error'` for its side
effects once, typically in the primary entry point to your program.

```js
import 'serializable-error'
```

Then, wherever you need to serialize an error, `JSON.stringify()` will work.

```js
try {
  // ...
} catch (error) {
  // `logger` serializes `error` before saving it.
  logger.error(error)
}

// The serialized error:
//
// {
//   "type": "AssertionError",
//   "message": "`3 + 5` is `7`",
//   "stack": [
//     "fn (/.../src/client.ts:35:3)",
//     "Object.<anonymous> (/.../src/client.ts:40:3)",
//     "Module._compile (module.js:649:30)",
//     "Module.m._compile (/.../node_modules/ts-node/src/index.ts:403:23)",
//     "Module._extensions..js (module.js:660:10)",
//     "Object.require.extensions.(anonymous function) [as .ts] (/.../node_modules/ts-node/src/index.ts:406:12)",
//     "Module.load (module.js:561:32)",
//     "tryModuleLoad (module.js:501:12)",
//     "Function.Module._load (module.js:493:3)",
//     "Function.Module.runMain (module.js:690:10)"
//   ],
//   "actual": false,
//   "code": "ERR_ASSERTION",
//   "expected": true,
//   "generatedMessage": false,
//   "name": "AssertionError [ERR_ASSERTION]",
//   "operator": "=="
// }

```
