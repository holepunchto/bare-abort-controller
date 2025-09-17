const test = require('brittle')
const AbortController = require('.')

test('basic', (t) => {
  t.plan(2)

  const controller = new AbortController()

  const signal = controller.signal

  signal.addEventListener('abort', (event) => {
    t.is(event.type, 'abort')
    t.is(event.target, signal)
  })

  controller.abort(new Error('Abort reason'))
})
