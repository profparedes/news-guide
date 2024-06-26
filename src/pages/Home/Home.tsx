import { memo, useEffect } from 'react'

import useTitle from 'hooks/useTitle'
import { useNewYorkTimes } from 'context/NewYorkTimesContext'
import Container from '@mui/material/Container'
import { HeaderBanner } from './style'
import Header from 'components/Header'
import { Box, Typography } from '@mui/material'
import Button from 'components/Button'
import useWindowSize from 'hooks/useWindowSize'
import { FaWhatsapp } from 'react-icons/fa'

const Home: React.FC = () => {
  const setTitle = useTitle()
  const { gteMd } = useWindowSize()
  const {
    businessStories,
    healthStories,
    moviesStories,
    politicsStories,
    sportsStories,
    isLoadingBusiness,
    isLoadingHealth,
    isLoadingMovies,
    isLoadingPolitics,
    isLoadingSports,
  } = useNewYorkTimes()

  useEffect(() => {
    setTitle('Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log({
    businessStories,
    healthStories,
    moviesStories,
    politicsStories,
    sportsStories,
    isLoadingBusiness,
    isLoadingHealth,
    isLoadingMovies,
    isLoadingPolitics,
    isLoadingSports,
  })

  return (
    <HeaderBanner>
      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Box
          color="#fff"
          maxWidth={544}
          gap={5}
          display="flex"
          flexDirection="column"
        >
          <Typography
            fontSize={gteMd ? 95 : 58}
            fontWeight={100}
            lineHeight={0.85}
          >
            <span style={{ fontWeight: 700 }}>Follow </span>
            the most
            <span style={{ fontWeight: 700 }}> important </span>
            headlines.
          </Typography>
          <Typography fontSize={gteMd ? 24 : 18} fontWeight={400}>
            Exclusive reports and in-depth analysis.
          </Typography>
          <Box>
            <Button label="Read more" />
          </Box>
        </Box>
        <Box
          bgcolor="#42B073"
          display="flex"
          padding="8px 8px 9px 8px"
          borderRadius={5}
          marginLeft="auto"
        >
          <FaWhatsapp color="#fff" size={24} />
        </Box>
      </Container>
    </HeaderBanner>
  )
}

export default memo(Home)
