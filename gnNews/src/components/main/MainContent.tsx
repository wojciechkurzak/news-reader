import { useEffect, useState } from 'react'
import credentials from '../../credentials.json'
import MainList from './MainList'
import { useAppDispatch } from '../../redux/hooks'
import { changeArticleCount } from '../../redux/features/article-count-slice'
import { ArticleCountStateType } from '../../types/store-types'
import { useLocation } from 'react-router-dom'
import { ArticleType } from '../../types/main-types'
import LoadingPage from '../misc/LoadingPage'
import '../../styles/main/MainContent.scss'

const MainContent = () => {
  const [articles, setArticles] = useState<ArticleType[]>([])

  const location = useLocation()

  const dispatch = useAppDispatch()

  const handleArticleCountChange = (value: ArticleCountStateType): void => {
    dispatch(changeArticleCount(value))
  }

  const handleGetArticles = async () => {
    const querry =
      location.pathname !== '/'
        ? `top-headlines?country=${location.pathname.slice(9, 11)}`
        : 'everything?domains=wsj.com'

    const response = await fetch(
      `https://newsapi.org/v2/${querry}&apiKey=${credentials.key}`
    )
    const data = await response.json()
    if (!data) return
    setArticles(data.articles)
    handleArticleCountChange(data.articles.length)
  }

  useEffect(() => {
    handleGetArticles()
  }, [location])

  return (
    <div className='main-content'>
      {articles.length !== 0 ? (
        <MainList articles={articles} />
      ) : (
        <LoadingPage />
      )}
    </div>
  )
}

export default MainContent
