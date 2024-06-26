import { Box } from '@mui/material'
import styled from 'styled-components'

export const HeaderContainer = styled(Box)`
  border-top: 5px solid #fff;
  padding-top: 5.875rem;
  padding-bottom: 5.875rem;

  @media (max-width: 768px) {
    border-top: none;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`

export const MobileMenu = styled(Box)`
  border: 2px solid #fff;
  border-radius: 6px;
  padding: 7px 7px 3px 7px;
`
