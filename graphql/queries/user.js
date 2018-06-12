import gql from 'graphql-tag'

import AccountFragment from '../fragments/Shared/Account'

const userQuery = gql`
  query UserQuery($auth: String!) {
    user(auth: $auth) {
      id
      firstName
      lastName
      status
      account {
        ...AccountFragment
      }
      answerFor(code: "wizard.progress")
    }
  }
${AccountFragment}
`

export default userQuery