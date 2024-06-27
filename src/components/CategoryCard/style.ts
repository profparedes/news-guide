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
  min-width: 12px;
  min-height: 100%;
  border-radius: 10px 0 0 10px;
  background-color: ${(props) => props.borderColor};
`

export const CardImg = styled.img<IBorderCategoryProps>`
  width: 12.5rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 10px;
  border-bottom: 8px solid ${(props) => props.borderColor};
`

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`

export const CustomDots = styled.div<IBorderCategoryProps>`
  width: 20px;
  height: 8px;
  border-radius: 4px;
  border: 1px solid #000;
  background-color: #fff;

  .slick-active & {
    background-color: ${(props) => props.borderColor};
    border-color: ${(props) => props.borderColor};
  }
`
