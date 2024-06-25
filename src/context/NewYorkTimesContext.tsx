import { NewYorkTimesStoriesType } from 'Types/newYorkTimes'
import { config } from 'config'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import Api from 'services/Api'

interface IContextProps {
  stories: NewYorkTimesStoriesType[]
  businessStories: NewYorkTimesStoriesType[]
  healthStories: NewYorkTimesStoriesType[]
  moviesStories: NewYorkTimesStoriesType[]
  politicsStories: NewYorkTimesStoriesType[]
  sportsStories: NewYorkTimesStoriesType[]
  isLoading: boolean
  isLoadingBusiness: boolean
  isLoadingHealth: boolean
  isLoadingMovies: boolean
  isLoadingPolitics: boolean
  isLoadingSports: boolean
  error: string | null
  fetchNewYorkTimesStories: (section: string) => void
}

interface INewYorkTimesProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const NewYorkTimesProvider: React.FC<INewYorkTimesProps> = ({
  children,
}) => {
  const [stories, setStories] = useState<NewYorkTimesStoriesType[]>([])
  const [businessStories, setBusinessStories] = useState<
    NewYorkTimesStoriesType[]
  >([])
  const [healthStories, setHealthStories] = useState<NewYorkTimesStoriesType[]>(
    [],
  )
  const [moviesStories, setMoviesStories] = useState<NewYorkTimesStoriesType[]>(
    [],
  )
  const [politicsStories, setPoliticsStories] = useState<
    NewYorkTimesStoriesType[]
  >([])
  const [sportsStories, setSportsStories] = useState<NewYorkTimesStoriesType[]>(
    [],
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingBusiness, setIsLoadingBusiness] = useState(false)
  const [isLoadingHealth, setIsLoadingHealth] = useState(false)
  const [isLoadingMovies, setIsLoadingMovies] = useState(false)
  const [isLoadingPolitics, setIsLoadingPolitics] = useState(false)
  const [isLoadingSports, setIsLoadingSports] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchNewYorkTimesStories = useCallback(async (section: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await Api.get(`/${section}.json`, {
        params: {
          'api-key': config.api.newYorkTimesApi.apiKey,
        },
      })
      setStories(response.data.results)
    } catch {
      setError('Error to fetching New York Times Stories')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchNewYorkTimesBusinessStories = useCallback(async () => {
    setIsLoadingBusiness(true)
    setError(null)

    try {
      const response = await Api.get(`/business.json`, {
        params: {
          'api-key': config.api.newYorkTimesApi.apiKey,
        },
      })
      setBusinessStories(response.data.results)
    } catch {
      setError('Error to fetching New York Times Stories')
    } finally {
      setIsLoadingBusiness(false)
    }
  }, [])

  const fetchNewYorkTimesHealthStories = useCallback(async () => {
    setIsLoadingHealth(true)
    setError(null)

    try {
      const response = await Api.get(`/health.json`, {
        params: {
          'api-key': config.api.newYorkTimesApi.apiKey,
        },
      })
      setHealthStories(response.data.results)
    } catch {
      setError('Error to fetching New York Times Stories')
    } finally {
      setIsLoadingHealth(false)
    }
  }, [])

  const fetchNewYorkTimesMoviesStories = useCallback(async () => {
    setIsLoadingMovies(true)
    setError(null)

    try {
      const response = await Api.get(`/movies.json`, {
        params: {
          'api-key': config.api.newYorkTimesApi.apiKey,
        },
      })
      setMoviesStories(response.data.results)
    } catch {
      setError('Error to fetching New York Times Stories')
    } finally {
      setIsLoadingMovies(false)
    }
  }, [])

  const fetchNewYorkTimesPoliticsStories = useCallback(async () => {
    setIsLoadingPolitics(true)
    setError(null)

    try {
      const response = await Api.get(`/politics.json`, {
        params: {
          'api-key': config.api.newYorkTimesApi.apiKey,
        },
      })
      setPoliticsStories(response.data.results)
    } catch {
      setError('Error to fetching New York Times Stories')
    } finally {
      setIsLoadingPolitics(false)
    }
  }, [])

  const fetchNewYorkTimesSportsStories = useCallback(async () => {
    setIsLoadingSports(true)
    setError(null)

    try {
      const response = await Api.get(`/sports.json`, {
        params: {
          'api-key': config.api.newYorkTimesApi.apiKey,
        },
      })
      setSportsStories(response.data.results)
    } catch {
      setError('Error to fetching New York Times Stories')
    } finally {
      setIsLoadingSports(false)
    }
  }, [])

  useEffect(() => {
    fetchNewYorkTimesBusinessStories()
    fetchNewYorkTimesHealthStories()
    fetchNewYorkTimesMoviesStories()
    fetchNewYorkTimesPoliticsStories()
    fetchNewYorkTimesSportsStories()
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
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
          error,
          fetchNewYorkTimesStories,
        }),
        [
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
          error,
          fetchNewYorkTimesStories,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useNewYorkTimes = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useNewYorkTimes must be within NewYorkTimesProvider')
  }

  return context
}
