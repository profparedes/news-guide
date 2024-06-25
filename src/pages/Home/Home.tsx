import { memo, useEffect } from 'react'

import useTitle from 'hooks/useTitle'
import { useNewYorkTimes } from 'context/NewYorkTimes'

const Home: React.FC = () => {
  const setTitle = useTitle()
  const {stories, fetchNewYorkTimesStories} = useNewYorkTimes()

  useEffect(() => {
    setTitle('Home')
    fetchNewYorkTimesStories('arts')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log({ stories })

  return <h1>NEWS GUIDE</h1>
}

export default memo(Home)
