# bare-abort-controller

Abort controller support for Bare.

```
npm i bare-abort-controller
```

## Usage

```js
const controller = new AbortController()

const signal = controller.signal

signal.addEventListener('abort', (event) => {
  console.log(event)
})

controller.abort(new Error('Operation aborted'))
```

## License

Apache-2.0

## API

See the [full API reference](https://docs.pears.com/reference/bare/modules/bare-abort-controller).
