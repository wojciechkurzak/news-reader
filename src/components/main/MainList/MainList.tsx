import React from 'react'
import { ArticleType, MainListProps } from '../../../types/main-types'
import MainListItem from '../MainListItem/MainListItem'
import './MainList.scss'

const MainList = ({ articles }: MainListProps) => {
  return (
    <div className='main-list'>
      {articles.map((article: ArticleType, index: number) => (
        <MainListItem article={article} key={index} />
      ))}
    </div>
  )
}

export default MainList
