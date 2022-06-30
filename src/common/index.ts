import { DangerDSLType } from '../danger.types'
import { forEach } from 'lodash'
import { isChangelogModified, isDocumentationModified } from './util'
import { DOD_MESSAGES } from './constants'

import  { Gitlab } from "@gitbeaker/node"

/**
 * Runs common danger checks for all projects
 */
export const common = (danger: DangerDSLType) => {
  const modifiedFiles = danger.git.modified_files

  /**
   * Checks if CHANGELOG.md has been updated
   */
  const isChangelogUpdated = isChangelogModified(modifiedFiles)
  if (!isChangelogUpdated) {
    fail('Please add a changelog entry for your changes.')
  }

  /**
   * Checks if documentation files have changed
   */
  const isDocumentationUpdated = isDocumentationModified(modifiedFiles)
  if (!isDocumentationUpdated) {
    fail('It looks like you forgot to update the documentation')
  }

  forEach(DOD_MESSAGES, msg => message(msg))

  const gitlab = new Gitlab({ jobToken: process.env.GITLAB_TOKEN })

  gitlab.MergeRequestApprovals.addApprovalRule(
    process.env.CI_PROJECT_ID as string,
    'Test',
    1,
    { mergerequestIid: Number(process.env.CI_MERGE_REQUEST_IID) },
  )
}
