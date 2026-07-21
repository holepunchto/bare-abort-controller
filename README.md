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

<!-- bare-refgen:api start -->

## API

### AbortController

#### `new AbortController()`

[source](https://github.com/holepunchto/bare-abort-controller/blob/v1.1.2/index.d.ts#L27)

Create a new `AbortController` with a fresh, unaborted `AbortSignal`.

#### `abort(reason: any): void`

[source](https://github.com/holepunchto/bare-abort-controller/blob/v1.1.2/index.d.ts#L23)

Abort the controller's signal, notifying every listener with the given `reason`.

**Parameters**

| Parameter | Type  | Default | Description                                                                                                                                  |
| --------- | ----- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `reason`  | `any` | —       | The reason to abort with; passed to every `'abort'` listener and exposed as the signal's `reason`. Defaults to an `AbortError` when omitted. |

#### `signal: AbortSignal`

[source](https://github.com/holepunchto/bare-abort-controller/blob/v1.1.2/index.d.ts#L21)

The `AbortSignal` linked to this controller.

### AbortSignal

#### `aborted: boolean`

[source](https://github.com/holepunchto/bare-abort-controller/blob/v1.1.2/index.d.ts#L4)

Whether the signal has been aborted.

#### `AbortSignal.abort(reason: any): AbortSignal`

[source](https://github.com/holepunchto/bare-abort-controller/blob/v1.1.2/index.d.ts#L15)

Return a new `AbortSignal` that is already aborted with the given `reason`.

**Parameters**

| Parameter | Type  | Default | Description                                                                               |
| --------- | ----- | ------- | ----------------------------------------------------------------------------------------- |
| `reason`  | `any` | —       | The reason the returned signal is aborted with. Defaults to an `AbortError` when omitted. |

#### `AbortSignal.any(signals: AbortSignal[]): AbortSignal`

[source](https://github.com/holepunchto/bare-abort-controller/blob/v1.1.2/index.d.ts#L17)

Return a new `AbortSignal` that aborts as soon as any of the given `signals` abort, with the same reason.

**Parameters**

| Parameter | Type            | Default | Description                                                                                                                             |
| --------- | --------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `signals` | `AbortSignal[]` | —       | The signals to observe; the returned signal aborts with the reason of whichever aborts first, or immediately if one is already aborted. |

#### `AbortSignal.timeout(ms: number): AbortSignal`

[source](https://github.com/holepunchto/bare-abort-controller/blob/v1.1.2/index.d.ts#L16)

Return a new `AbortSignal` that aborts with a `TimeoutError` after `ms` milliseconds.

**Parameters**

| Parameter | Type     | Default | Description                                                                                 |
| --------- | -------- | ------- | ------------------------------------------------------------------------------------------- |
| `ms`      | `number` | —       | The number of milliseconds to wait before the returned signal aborts with a `TimeoutError`. |

#### `reason: any`

[source](https://github.com/holepunchto/bare-abort-controller/blob/v1.1.2/index.d.ts#L5)

The reason the signal was aborted, or `undefined` if it hasn't been.

#### `throwIfAborted(): void`

[source](https://github.com/holepunchto/bare-abort-controller/blob/v1.1.2/index.d.ts#L7)

Throw the signal's abort reason if the signal has been aborted, otherwise do nothing.

#### `toJSON(): { aborted: boolean; reason: any }`

[source](https://github.com/holepunchto/bare-abort-controller/blob/v1.1.2/index.d.ts#L9)

Return a plain object with the signal's `aborted` and `reason` values.

## `bare-abort-controller/global`

### Types

#### `AbortControllerConstructor`

```ts
type AbortControllerConstructor = typeof abort.AbortController
```

[source](https://github.com/holepunchto/bare-abort-controller/blob/v1.1.2/global.d.ts#L3)

#### `AbortSignalConstructor`

```ts
type AbortSignalConstructor = typeof abort.AbortSignal
```

[source](https://github.com/holepunchto/bare-abort-controller/blob/v1.1.2/global.d.ts#L4)

<!-- bare-refgen:api end -->
