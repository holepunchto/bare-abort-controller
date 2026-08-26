import * as abort from '.'

type AbortControllerConstructor = typeof abort.AbortController
type AbortSignalConstructor = typeof abort.AbortSignal

declare global {
  /** Controller object that lets you abort one or more operations via its linked `AbortSignal`. */
  type AbortController = abort.AbortController
  /** Signal object that reports whether an operation has been aborted and why. */
  type AbortSignal = abort.AbortSignal

  const AbortController: AbortControllerConstructor
  const AbortSignal: AbortSignalConstructor
}
