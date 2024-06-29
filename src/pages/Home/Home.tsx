/* eslint-disable react/jsx-props-no-spreading */
import { memo, useEffect, useMemo } from 'react'

import useTitle from 'hooks/useTitle'
import { useNewYorkTimes } from 'context/NewYorkTimesContext'
import Container from '@mui/material/Container'
import Header from 'components/Header'
import { Box, Skeleton, Typography } from '@mui/material'
import Button from 'components/Button'
import useWindowSize from 'hooks/useWindowSize'
import { FaWhatsapp } from 'react-icons/fa'
import LatestNewsCard from 'components/LatestNewsCard'
import CategoryCard from 'components/CategoryCard'
import Slider from 'react-slick'
import { CategoriesSection, CustomDots, HeaderBanner } from './style'

const colors = ['#42B073', '#24BEFF', '#FF632D', '#FFD400', '#9B836B']

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  customPaging: () => <CustomDots />,
}

const Home: React.FC = () => {
  const setTitle = useTitle()
  const { gteMd } = useWindowSize()
  const {
    stories,
    businessStories,
    technologyStories,
    moviesStories,
    politicsStories,
    sportsStories,
    isLoading,
    isLoadingBusiness,
    isLoadingTechnology,
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

  const lastedNewsMap = useMemo(
    () =>
      stories && !isLoading
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
        : Array.from({ length: 5 }).map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Box paddingX={1} width={gteMd ? '20%' : '100%'} key={i}>
              <Skeleton variant="rounded" width="100%" height={360} />
            </Box>
          )),
    [gteMd, stories, isLoading],
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
      {gteMd ? (
        <Box display="flex">{lastedNewsMap}</Box>
      ) : (
        <Slider {...settings}>{lastedNewsMap}</Slider>
      )}
      <CategoriesSection>
        <Container>
          <Box display="flex" flexDirection="column" gap={4}>
            {businessStories && (
              <CategoryCard
                title="Business"
                color="#42B073"
                description="Latest market trends, economic insights, and corporate developments."
                storiesData={businessStories}
                loading={isLoadingBusiness}
              />
            )}
            {technologyStories && (
              <CategoryCard
                title="Science"
                color="#24BEFF"
                description="Explore groundbreaking discoveries and cutting-edge research in science today."
                storiesData={technologyStories}
                loading={isLoadingTechnology}
              />
            )}
            {moviesStories && (
              <CategoryCard
                title="Movies"
                color="#FF632D"
                description="Discover the latest films, reviews, and entertainment news."
                storiesData={moviesStories}
                loading={isLoadingMovies}
              />
            )}
            {politicsStories && (
              <CategoryCard
                title="Politics"
                color="#FFD400"
                description="Insightful analysis and updates on global political developments and policies."
                storiesData={politicsStories}
                loading={isLoadingPolitics}
              />
            )}
            {sportsStories && (
              <CategoryCard
                title="Sports"
                color="#9B836B"
                description="Score updates, athlete profiles, and game highlights from around the world."
                storiesData={sportsStories}
                loading={isLoadingSports}
              />
            )}
          </Box>
        </Container>
      </CategoriesSection>
    </>
  )
}

export default memo(Home)
