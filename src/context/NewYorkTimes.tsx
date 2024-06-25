import { NewYorkTimesStoriesType } from 'Types/newYorkTimes';
import { config } from 'config';
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import Api from 'services/Api';

interface IContextProps {
  stories: NewYorkTimesStoriesType[];
  isLoading: boolean
  error: string | null
  fetchNewYorkTimesStories: (section: string) => void;
}

interface INewYorkTimesProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const NewYorkTimesProvider: React.FC<INewYorkTimesProps> = ({
  children,
}) => {
  const [ stories, setStories ] = useState<NewYorkTimesStoriesType[]>([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState<string | null>(null);

  const fetchNewYorkTimesStories = useCallback(async (section: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await Api.get(`/${section}.json`, {
        params: {
          'api-key': config.api.newYorkTimesApi.apiKey
        }
      });
      setStories(response.data.results);
    } catch {
      setError('Error to fetching New York Times Stories');
    } finally {
      setIsLoading(false);
    }
  }, [])


  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          stories,
          isLoading,
          error,
          fetchNewYorkTimesStories
        }),
        [
          stories,
          isLoading,
          error,
          fetchNewYorkTimesStories
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
