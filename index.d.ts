import { EventTarget } from 'bare-events/web'

interface AbortSignal extends EventTarget {
  readonly aborted: boolean
  readonly reason: any

  throwIfAborted(): void
}

declare class AbortSignal {
  private constructor()
}

interface AbortController {
  readonly signal: AbortSignal

  abort(reason: any): void
}

declare class AbortController {
  constructor()

  static abort(reason: any): AbortSignal
  static timeout(ms: number): AbortSignal
}

declare namespace AbortController {
  export { AbortSignal, AbortController }
}

export = AbortController
