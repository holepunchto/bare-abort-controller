import { EventTarget } from 'bare-events/web'

/** Signal object that reports whether an operation has been aborted and why. */
interface AbortSignal extends EventTarget {
  /** Whether the signal has been aborted. */
  readonly aborted: boolean
  /** The reason the signal was aborted, or `undefined` if it hasn't been. */
  readonly reason: any

  /** Throw the signal's abort reason if the signal has been aborted, otherwise do nothing. */
  throwIfAborted(): void

  /** Return a plain object with the signal's `aborted` and `reason` values. */
  toJSON(): { aborted: boolean; reason: any }
}

declare class AbortSignal {
  private constructor()

  /**
   * Return a new `AbortSignal` that is already aborted with the given `reason`.
   * @param reason - The reason the returned signal is aborted with. Defaults to an `AbortError`
   * when omitted.
   */
  static abort(reason: any): AbortSignal
  /**
   * Return a new `AbortSignal` that aborts with a `TimeoutError` after `ms` milliseconds.
   * @param ms - The number of milliseconds to wait before the returned signal aborts with a
   * `TimeoutError`.
   */
  static timeout(ms: number): AbortSignal
  /**
   * Return a new `AbortSignal` that aborts as soon as any of the given `signals` abort, with the
   * same reason.
   * @param signals - The signals to observe; the returned signal aborts with the reason of
   * whichever aborts first, or immediately if one is already aborted.
   */
  static any(signals: AbortSignal[]): AbortSignal
}

/** Controller object that lets you abort one or more operations via its linked `AbortSignal`. */
interface AbortController {
  /** The `AbortSignal` linked to this controller. */
  readonly signal: AbortSignal

  /**
   * Abort the controller's signal, dispatching an `'abort'` event to its listeners. Does nothing
   * if the signal has already been aborted.
   * @param reason - The reason to abort with; exposed as the signal's `reason` and thrown by
   * `throwIfAborted()`. Listeners are passed a plain `Event` and must read `signal.reason`
   * themselves. Defaults to an `AbortError` when omitted.
   */
  abort(reason: any): void
}

declare class AbortController {
  /** Create a new `AbortController` with a fresh, unaborted `AbortSignal`. */
  constructor()
}

declare namespace AbortController {
  export { AbortSignal, AbortController }
}

export = AbortController
