import { useEffect, useState } from 'react'
import MainList from '../MainList/MainList'
import { useAppDispatch } from '../../../redux/hooks'
import { changeArticleCount } from '../../../redux/features/article-count-slice'
import { ArticleCountStateType } from '../../../types/store-types'
import { useLocation } from 'react-router-dom'
import { ArticleType } from '../../../types/main-types'
import LoadingPage from '../../misc/LoadingPage/LoadingPage'
import './MainContent.scss'
import NoArticles from '../../misc/NoArticles/NoArticles'

const MainContent = () => {
  const [articles, setArticles] = useState<ArticleType[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const location = useLocation()

  const dispatch = useAppDispatch()

  const handleArticleCountChange = (value: ArticleCountStateType): void => {
    dispatch(changeArticleCount(value))
  }

  const handleGetArticles = () => {
    const fileLocation =
      location.pathname === '/'
        ? `../../../data/articles/home.json`
        : `../../../data/articles/${location.pathname.slice(9, 11)}.json`

    import(fileLocation)
      .then((data) => {
        setArticles(data.articles)
        handleArticleCountChange(data.articles.length)
        setLoading(false)
      })
      .catch(() => {
        setArticles(null)
        handleArticleCountChange(0)
        setLoading(false)
      })
  }

  useEffect(() => {
    setLoading(true)
    handleGetArticles()
  }, [location])

  return (
    <main className='main-content'>
      {!loading ? (
        articles ? (
          <MainList articles={articles} />
        ) : (
          <NoArticles />
        )
      ) : (
        <LoadingPage />
      )}
    </main>
  )
}

export default MainContent
