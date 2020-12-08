import { darken } from 'polished'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100rem;
  border: 1px solid #cecdce;
  padding: 1.2rem;

  button {
    margin: 0 auto;
    display: block;
  }
`

export const Title = styled.h2`
  color: #f5f5fd;
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid #cecdce;
  padding-bottom: 1.2rem;
`

export const JobItem = styled.div`
  background-color: #3e3b47;
  margin-bottom: 1rem;
  padding: 0.8rem 2rem;
  border-radius: 0.4rem;
  ${(props) => (props.role ? 'cursor: pointer' : 'cursor: normal')};

  &:hover {
    ${({ role }) =>
      role
        ? `background-color: ${darken(0.02, '#3e3b47')}`
        : 'background-color: #3e3b47;'}
  }

  & + button {
    margin-top: 3rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const JobTitle = styled.h3`
  font-size: 1.8rem;
  display: inline-block;
  width: 100%;
`

export const Commitment = styled.p`
  display: block;
  font-size: 1.2rem;
`

export const Company = styled.p`
  display: inline-block;
  margin-top: 0.4rem;
  margin-right: 3rem;
  font-weight: 600;
  font-size: 1.4rem;

  & span {
    color: #f4ede8;
    font-weight: normal;
  }

  span + span {
    margin-left: 0.6rem;
  }
`

export const Location = styled(Company)``

export const Description = styled.p`
  margin-top: 1.6rem;
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #3e3b47;
  background-image: linear-gradient(
    to right,
    #3e3b47 0%,
    #424250 20%,
    #3e3b47 40%,
    #3f3c47 100%
  );
  background-size: 100rem 60rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  @keyframes placeholderShimmer {
    0% {
      background-position: -50rem 0;
    }
    100% {
      background-position: 50rem 0;
    }
  }
`
