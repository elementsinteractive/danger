import { DangerDSLType, Platform } from './danger.types'
import { common } from './common'
import { android } from './android'
import { ios } from './ios'
import { reactNative } from './react-native'

/* eslint no-var: off */
declare var danger: DangerDSLType

/**
 * Shared Danger checks for Elements projects
 */
export default function dangerElements(platform: Platform) {
  // Runs common checks
  common(danger)

  // Runs platform specific checks
  switch (platform) {
    case 'android':
      android(danger)
      break
    case 'ios':
      ios(danger)
      break
    case 'react-native':
      reactNative(danger)
      break
    default:
      break
  }
}
