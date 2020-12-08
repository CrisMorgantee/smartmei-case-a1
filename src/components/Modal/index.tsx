import { X as Close } from '@styled-icons/feather/X'
import React from 'react'
import * as S from './styles'

type ModalProps = {
  children: React.ReactElement
  title: string
  isOpen: boolean
  onClose: () => void
}

export const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  const outsideRef = React.useRef(null)
  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose()
    }
  }
  return isOpen ? (
    <S.Modal>
      <S.ModalOverlay ref={outsideRef} onClick={handleCloseOnOverlay} />
      <S.ModalBox>
        <S.ModalClose onClick={onClose}>
          <Close size={28} />
        </S.ModalClose>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalContent>{children}</S.ModalContent>
      </S.ModalBox>
    </S.Modal>
  ) : null
}
