const GET_JOBS = /* GraphQL */ `
  query GET_JOBS {
    jobs {
      id
      title
      slug
      commitment {
        title
      }
      company {
        name
        slug
      }
      locationNames
    }
  }
`

export default GET_JOBS
