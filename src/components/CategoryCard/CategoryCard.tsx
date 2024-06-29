/* eslint-disable react/jsx-props-no-spreading */
import { NewYorkTimesStoriesType } from 'Types/newYorkTimes'
import { memo, useMemo } from 'react'
import { Box, Skeleton, Typography } from '@mui/material'
import Button from 'components/Button'
import { format } from 'date-fns'
import { IoIosArrowRoundForward } from 'react-icons/io'
import useWindowSize from 'hooks/useWindowSize'
import Slider from 'react-slick'
import {
  BorderCategory,
  CardImg,
  CategoryCardContainer,
  CustomDots,
  SlideContainer,
} from './style'

interface ICategoryCardProps {
  title: string
  description?: string
  storiesData?: NewYorkTimesStoriesType[]
  color?: string
  loading?: boolean
}

const customPaging = (color: string) => () => <CustomDots borderColor={color} />

const CategoryCard: React.FC<ICategoryCardProps> = ({
  title,
  description,
  storiesData,
  color = '#42B073',
  loading = false,
}) => {
  const { gteMd } = useWindowSize()

  const settings = useMemo(
    () => ({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      customPaging: customPaging(color),
    }),
    [color],
  )

  const cardMap = useMemo(
    () =>
      storiesData && !loading
        ? storiesData
            .map((story) => (
              <div key={story?.url}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                >
                  <CardImg
                    borderColor={color}
                    src={story?.multimedia && story.multimedia[0].url}
                    alt={
                      story?.multimedia && story.multimedia[0]
                        ? story?.multimedia[0].caption
                        : ''
                    }
                  />
                </Box>
                <Box padding="8px">
                  <Typography fontWeight={700}>
                    {story?.title.length > 30
                      ? `${story?.title.slice(0, 30)}...`
                      : story?.title}
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    sx={{
                      padding: '8px 16px',
                    }}
                  >
                    <Typography>
                      {format(new Date(story.published_date), 'MMM dd, yyyy')}
                    </Typography>
                    <IoIosArrowRoundForward size={26} />
                  </Box>
                </Box>
              </div>
            ))
            .slice(0, 3)
        : Array.from({ length: 3 }).map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Box display="flex" flexDirection="column" gap={2} key={i}>
              <Skeleton variant="rounded" width={200} height={128} />
              <Skeleton variant="text" width={200} height={32} />
              <Box display="flex" justifyContent="space-between">
                <Skeleton variant="text" width={80} height={32} />
                <Skeleton variant="circular" width={30} height={30} />
              </Box>
            </Box>
          )),
    [storiesData, color, loading],
  )

  return (
    <CategoryCardContainer>
      <BorderCategory borderColor={color} />
      <Box
        padding="38px 54px 38px 73px"
        display="flex"
        width="100%"
        gap={gteMd ? 0 : 3}
        flexDirection={gteMd ? 'row' : 'column'}
        justifyContent={gteMd ? 'space-between' : 'center'}
        alignItems={gteMd ? 'flex-start' : 'unset'}
        textAlign={gteMd ? 'left' : 'center'}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={4}
          maxWidth={gteMd ? 400 : undefined}
        >
          <Typography
            fontSize={gteMd ? 80 : 40}
            fontWeight={100}
            lineHeight={0.85}
          >
            {title}
          </Typography>
          {gteMd && (
            <>
              <Typography fontSize={18}>{description}</Typography>
              <div>
                <Button inverted label="Read more" />
              </div>
            </>
          )}
        </Box>
        {gteMd ? (
          <Box display="flex" gap={3} marginLeft={2}>
            {cardMap}
          </Box>
        ) : (
          <SlideContainer>
            <Slider {...settings}>{cardMap}</Slider>
          </SlideContainer>
        )}
      </Box>
    </CategoryCardContainer>
  )
}

export default memo(CategoryCard)
