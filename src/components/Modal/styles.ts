import { darken } from 'polished'
import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export const ModalBox = styled.div`
  position: relative;
  width: 70%;
  margin: 0 10%;
  padding: 3rem;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #f4ede8;
  cursor: auto;

  @media screen and (min-width: 800px) {
    .modal__box {
      max-width: 600px;
      margin: 0 30px;
    }
  }
`

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`

export const ModalTitle = styled.h2`
  color: #f062c0;
  font-size: 30px;
`

export const ModalContent = styled.div`
  margin-top: 30px;
  font-size: 16px;
`

export const ModalClose = styled.button`
  border: none;
  background-color: #f062c0;
  border-radius: 50%;
  padding: 0.4rem;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: all 300ms ease-in-out;
  transform-origin: 50% 50%;
  cursor: pointer;

  & svg {
    color: #f5f5fd;
  }

  &:hover {
    transform: rotate(180deg);
    background-color: ${darken(0.07, '#f062c0')};
  }
`
