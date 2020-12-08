import React from 'react'
import * as S from './styles'

export type PaginationProps = {
  perPage: number
  totalJobs: number
  paginate: (number: number) => void
}

const Pagination = ({ perPage, totalJobs, paginate }: PaginationProps) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalJobs / perPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <S.Wrapper>
      <S.List>
        {pageNumbers.map((number) => (
          <S.Item key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  )
}

export default Pagination
