const SUBSCRIBE = /* GraphQL */ `
  mutation SUBSCRIBE($name: String!, $email: String!) {
    subscribe(input: { name: $name, email: $email }) {
      name
      email
    }
  }
`

export default SUBSCRIBE
