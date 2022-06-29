// Provides dev-time type structures for  `danger` - doesn't affect runtime.
import { DangerDSLType } from '../node_modules/danger/distribution/dsl/DangerDSL'
import { DangerResults } from '../node_modules/danger/distribution/dsl/DangerResults'

/**
 * Current results of Danger run instance
 */
/* eslint no-var: off */
declare var results: DangerResults

// Provides dev-time type structures for  `danger` - doesn't affect runtime.
declare global {
  let danger: DangerDSLType
  function message(message: string, file?: string, line?: number): void
  function warn(message: string, file?: string, line?: number): void
  function fail(message: string, file?: string, line?: number): void
  function markdown(message: string, file?: string, line?: number): void
}

export { DangerDSLType }

export type Platform = 'android' | 'ios' | 'react-native'
