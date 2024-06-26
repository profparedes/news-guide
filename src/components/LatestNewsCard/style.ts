import { Box } from '@mui/material'
import styled from 'styled-components'

interface IBgCardProps {
  image: string
  borderTopColor?: string
  cardWidth?: string | number
}

export const BgCard = styled(Box)<IBgCardProps>`
  position: relative;
  background-image: url(${(props) => props.image});
  border-top: 8px solid ${(props) => props.borderTopColor};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 0 0 10px 10px;
  max-width: ${(props) => props.cardWidth};
  height: 22.875rem;
  padding: 2.25rem;
  color: #fff;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Ajuste a opacidade conforme necessário */
    border-radius: inherit;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`
