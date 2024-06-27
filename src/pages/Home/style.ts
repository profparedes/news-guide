import styled from 'styled-components'

import BgBanner from 'assets/banner-background.png'

export const HeaderBanner = styled.div`
  background-image: url(${BgBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 1019px;

  @media (max-width: 768px) {
    height: 600px;
    background-position: center;
  }
`

export const CategoriesSection = styled.div`
  padding: 2.5rem 0;
`

export const CustomDots = styled.div`
  width: 20px;
  height: 8px;
  margin-top: 8px;
  border-radius: 4px;
  border: 1px solid #000;
  background-color: #fff;

  .slick-active & {
    background-color: #42b073;
    border-color: #42b073;
  }
`
