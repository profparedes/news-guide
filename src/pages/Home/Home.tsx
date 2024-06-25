import { memo, useEffect } from 'react'

import useTitle from 'hooks/useTitle'
import { useNewYorkTimes } from 'context/NewYorkTimesContext'

const Home: React.FC = () => {
  const setTitle = useTitle()
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

  console.log({ businessStories })

  return <h1>NEWS GUIDE</h1>
}

export default memo(Home)
