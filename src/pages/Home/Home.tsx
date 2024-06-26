import { memo, useEffect, useMemo } from 'react'

import useTitle from 'hooks/useTitle'
import { useNewYorkTimes } from 'context/NewYorkTimesContext'
import Container from '@mui/material/Container'
import Header from 'components/Header'
import { Box, Typography } from '@mui/material'
import Button from 'components/Button'
import useWindowSize from 'hooks/useWindowSize'
import { FaWhatsapp } from 'react-icons/fa'
import LatestNewsCard from 'components/LatestNewsCard'
import { HeaderBanner } from './style'

const colors = ['#42B073', '#24BEFF', '#FF632D', '#FFD400', '#9B836B']

const Home: React.FC = () => {
  const setTitle = useTitle()
  const { gteMd } = useWindowSize()
  const {
    stories,
    businessStories,
    healthStories,
    moviesStories,
    politicsStories,
    sportsStories,
    isLoading,
    isLoadingBusiness,
    isLoadingHealth,
    isLoadingMovies,
    isLoadingPolitics,
    isLoadingSports,
    fetchNewYorkTimesStories,
  } = useNewYorkTimes()

  useEffect(() => {
    setTitle('Home')
    fetchNewYorkTimesStories('world')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log({
    stories,
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

  const lastedNewsMap = useMemo(
    () =>
      stories
        ? stories
            .map((story, i) => (
              <LatestNewsCard
                key={story?.title ?? i}
                image={
                  story?.multimedia && story.multimedia[0]
                    ? story.multimedia[0].url
                    : ''
                }
                title={story?.title ?? ''}
                date={story?.published_date ?? ''}
                width={gteMd ? '20%' : '100%'}
                borderColor={colors[i % colors.length]}
              />
            ))
            .slice(0, 5)
        : [],
    [gteMd, stories],
  )

  return (
    <>
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
      <Box display="flex">{!isLoading && lastedNewsMap}</Box>
    </>
  )
}

export default memo(Home)
