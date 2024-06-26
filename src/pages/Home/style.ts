import styled from 'styled-components'

import BgBanner from 'assets/banner-background.png'

export const HeaderBanner = styled.div`
  background-image: url(${BgBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 1019px;

  @media (max-width: 768px) {
    height: 500px;
    background-position: center;
  }
`
