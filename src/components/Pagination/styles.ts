import styled from 'styled-components'

export const Wrapper = styled.nav`
  margin-left: 2rem;
`

export const List = styled.ul``

export const Item = styled.li`
  list-style: none;
  background-color: #f5f5fd;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-bottom: 1.2rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f062c0;
    color: #f5f5fd;

    a {
      color: #f5f5fd;
    }
  }

  a {
    text-decoration: none;
    color: #3e3b47;
  }
`
