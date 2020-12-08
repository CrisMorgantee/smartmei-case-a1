const GET_JOB = /* GraphQL */ `
  query GET_JOB($companySlug: String!, $jobSlug: String!) {
    job(input: { companySlug: $companySlug, jobSlug: $jobSlug }) {
      title
      commitment {
        title
      }
      company {
        name
      }
      locationNames
      description
    }
  }
`

export default GET_JOB
