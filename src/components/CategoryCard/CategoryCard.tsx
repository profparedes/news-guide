import { NewYorkTimesStoriesType } from 'Types/newYorkTimes'
import { memo, useMemo } from 'react'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import Button from 'components/Button'
import { format } from 'date-fns'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { BorderCategory, CategoryCardContainer } from './style'

interface ICategoryCardProps {
  title: string
  description?: string
  storiesData?: NewYorkTimesStoriesType[]
  color?: string
}

const CategoryCard: React.FC<ICategoryCardProps> = ({
  title,
  description,
  storiesData,
  color = '#42B073',
}) => {
  const cardMap = useMemo(
    () =>
      storiesData
        ? storiesData
            .map((story) => (
              <Card
                sx={{
                  width: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  marginBottom: 2,
                  backgroundColor: '#f7f7f7',
                }}
                key={story?.url}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image={
                      story?.multimedia && story.multimedia[0]
                        ? story.multimedia[0].url
                        : ''
                    }
                    alt={
                      story?.multimedia && story.multimedia[0]
                        ? story?.multimedia[0].caption
                        : ''
                    }
                    sx={{
                      borderBottom: `8px solid ${color}`,
                      borderRadius: '8px',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography fontWeight={700}>
                      {story?.title.length > 30
                        ? `${story?.title.slice(0, 30)}...`
                        : story?.title}
                    </Typography>
                  </CardContent>
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
                </CardActionArea>
              </Card>
            ))
            .slice(0, 3)
        : null,
    [storiesData, color],
  )

  console.log({ cardMap })

  return (
    <CategoryCardContainer>
      <BorderCategory borderColor={color} />
      <Box
        padding="38px 54px 38px 73px"
        display="flex"
        justifyContent="space-between"
      >
        <Box display="flex" flexDirection="column" gap={4} maxWidth={400}>
          <Typography fontSize={80} fontWeight={100} lineHeight={0.85}>
            {title}
          </Typography>
          <Typography fontSize={18}>{description}</Typography>
          <div>
            <Button inverted label="Read more" />
          </div>
        </Box>
        <Box display="flex" gap={3} marginLeft={2}>
          {cardMap}
        </Box>
      </Box>
    </CategoryCardContainer>
  )
}

export default memo(CategoryCard)
