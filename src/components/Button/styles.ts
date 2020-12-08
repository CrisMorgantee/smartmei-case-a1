import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${() => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #ff5f5f 0, #f062c0 50%);
    font-family: inherit;
    font-weight: 600;
    color: #f5f5fd;
    text-decoration: none;
    border-radius: 0.4rem;
    border: 0;
    padding: 0.8rem;
    cursor: pointer;

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }
  `}
`
