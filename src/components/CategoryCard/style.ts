import styled from 'styled-components'

export const CategoryCardContainer = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: #f7f7f7;
`

interface IBorderCategoryProps {
  borderColor?: string
}

export const BorderCategory = styled.div<IBorderCategoryProps>`
  width: 12px;
  min-height: 100%;
  border-radius: 10px 0 0 10px;
  background-color: ${(props) => props.borderColor};
`
