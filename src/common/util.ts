import { includes, some } from 'lodash'

export const isChangelogModified = (modifiedFiles: string[]): boolean =>
  some(modifiedFiles, file => /changelog.md/i.test(file))

export const isDocumentationModified = (modifiedFiles: string[]): boolean =>
  some(modifiedFiles, (file: string) => includes(file, 'documentation/'))
