import { memo } from 'react'
import { Box, Typography } from '@mui/material'
import { format } from 'date-fns'

import { IoIosArrowRoundForward } from 'react-icons/io'
import { BgCard } from './style'

interface ILatestNewsCardProps {
  image: string
  title: string
  date: string
  width?: string
  borderColor?: string
}

const LatestNewsCard: React.FC<ILatestNewsCardProps> = ({
  image,
  title,
  date,
  width = '100%',
  borderColor,
}) => (
  <BgCard
    image={image}
    borderTopColor={borderColor}
    display="flex"
    cardWidth={width}
  >
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
      justifyContent="flex-end"
      gap={4}
    >
      <Typography fontSize={18} fontWeight={700}>
        {title}
      </Typography>
      <Box display="flex" justifyContent="space-between">
        {date && <Typography>{format(date, 'MMM dd,yyyy')}</Typography>}
        <IoIosArrowRoundForward size={26} />
      </Box>
    </Box>
  </BgCard>
)

export default memo(LatestNewsCard)
