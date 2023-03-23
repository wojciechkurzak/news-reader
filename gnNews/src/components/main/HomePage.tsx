import React, { useEffect } from 'react'
import credentials from '../../credentials.json'
import articles from '../../data/articles.json'
import MainList from './MainList'
import '../../styles/main/HomePage.scss'
import { useAppDispatch } from '../../redux/hooks'
import { changeArticleCount } from '../../redux/features/article-count-slice'
import { ArticleCountStateType } from '../../types/store-types'

const HomePage = () => {
  const dispatch = useAppDispatch()

  const handleArticleCountChange = (value: ArticleCountStateType): void => {
    dispatch(changeArticleCount(value))
  }

  // const handleGetArticles = async () => {
  //   const response = await fetch(
  //     `https://newsapi.org/v2/top-headlines?country=us&apiKey=${credentials.key}`
  //   )
  //   const data = await response.json()
  //   console.log(data)
  // }
  //
  useEffect(() => {
    // getArticles()
    handleArticleCountChange(articles.length)
  })

  return (
    <div className='home-page'>
      <MainList articles={articles} />
    </div>
  )
}

export default HomePage
