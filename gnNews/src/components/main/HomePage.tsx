import React, { useEffect } from 'react'
import credentials from '../../credentials.json'
import articles from '../../data/articles.json'
import MainList from './MainList'
import '../../styles/main/HomePage.scss'

const HomePage = () => {
  // const handleGetArticles = async () => {
  //   const response = await fetch(
  //     `https://newsapi.org/v2/top-headlines?country=us&apiKey=${credentials.key}`
  //   )
  //   const data = await response.json()
  //   console.log(data)
  // }
  //
  // useEffect(() => {
  //   getArticles()
  // })

  return (
    <div className='home-page'>
      <MainList articles={articles} />
    </div>
  )
}

export default HomePage
