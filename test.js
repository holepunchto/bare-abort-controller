const test = require('brittle')
const { AbortController, AbortSignal } = require('.')

function noop() {}

test('basic', (t) => {
  t.plan(6)

  const controller = new AbortController()

  const signal = controller.signal

  signal.addEventListener('abort', (event) => {
    t.is(event.type, 'abort')
    t.is(event.target, signal)
  })

  t.is(signal.aborted, false)

  controller.abort(new Error('Abort reason'))

  t.is(signal.aborted, true)
  t.is(signal.reason.message, 'Abort reason')
  t.exception(() => signal.throwIfAborted(), /Abort reason/)
})

test('AbortSignal, abort', (t) => {
  t.plan(1)

  const signal = AbortSignal.abort(new Error('boom!'))

  signal.addEventListener('abort', (event) => {
    t.fail()
  })

  t.is(signal.reason.message, 'boom!')
})

test('AbortSignal, timeout', (t) => {
  t.plan(1)

  const keepTestAlive = setInterval(noop)
  t.teardown(() => clearInterval(keepTestAlive))

  const signal = AbortSignal.timeout(100)

  signal.addEventListener('abort', (event) => {
    t.is(signal.reason.message, 'The operation timed out')
  })
})
