const { Event, EventTarget } = require('bare-events/web')

// https://webidl.spec.whatwg.org/#aborterror
class AbortError extends Error {
  get name() {
    return 'AbortError'
  }
}

// https://webidl.spec.whatwg.org/#timeouterror
class TimeoutError extends Error {
  get name() {
    return 'TimeoutError'
  }
}

// https://dom.spec.whatwg.org/#abortsignal
class AbortSignal extends EventTarget {
  constructor() {
    super()

    this._reason = undefined
  }

  // https://dom.spec.whatwg.org/#dom-abortsignal-aborted
  get aborted() {
    return this._reason !== undefined
  }

  // https://dom.spec.whatwg.org/#dom-abortsignal-reason
  get reason() {
    return this._reason
  }

  // https://dom.spec.whatwg.org/#abortsignal-signal-abort
  _abort(reason = new AbortError('The operation was aborted')) {
    if (this.aborted) return

    this._reason = reason

    this.dispatchEvent(new Event('abort'))
  }

  // https://dom.spec.whatwg.org/#dom-abortsignal-throwifaborted
  throwIfAborted() {
    if (this._reason !== undefined) throw this._reason
  }

  toJSON() {
    return {
      aborted: this.aborted,
      reason: this.reason
    }
  }

  [Symbol.for('bare.inspect')]() {
    return {
      __proto__: { constructor: AbortSignal },

      aborted: this.aborted,
      reason: this.reason
    }
  }

  // https://dom.spec.whatwg.org/#dom-abortsignal-abort
  static abort(reason) {
    const signal = new AbortSignal()

    signal._reason = reason

    return signal
  }

  // https://dom.spec.whatwg.org/#dom-abortsignal-timeout
  static timeout(ms) {
    const signal = new AbortSignal()

    const timer = setTimeout(
      () => signal._abort(new TimeoutError('The operation timed out')),
      ms
    )

    timer.unref()

    return signal
  }
}

// https://dom.spec.whatwg.org/#abortcontroller
class AbortController {
  constructor() {
    this._signal = new AbortSignal()
  }

  // https://dom.spec.whatwg.org/#dom-abortcontroller-signal
  get signal() {
    return this._signal
  }

  // https://dom.spec.whatwg.org/#dom-abortcontroller-abort
  abort(reason) {
    this._signal._abort(reason)
  }

  toJSON() {
    return {
      signal: this.signal
    }
  }

  [Symbol.for('bare.inspect')]() {
    return {
      __proto__: { constructor: AbortController },

      signal: this.signal
    }
  }
}

module.exports = exports = AbortController

exports.AbortController = exports

exports.AbortSignal = AbortSignal
