import { useState } from 'react'
import { MainListItemProps } from '../../types/main-types'
import { useAppSelector } from '../../redux/hooks'
import '../../styles/main/MainListItem.scss'
import MainModal from './MainModal'

const MainListItem = ({ article }: MainListItemProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const articleView = useAppSelector((state) => state.articleView.type)

  const handleOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <>
      <div
        className={
          articleView === 'list'
            ? 'main-list-item list-view'
            : 'main-list-item grid-view'
        }
        onClick={handleOpen}
      >
        <div className='teaser'>
          <img src={article.urlToImage} alt='teaser' />
        </div>
        <div className='article-title'>
          <h2>Title</h2>
          <p>{article.description}</p>
        </div>
        <div className='article-source'>
          <h2>Source</h2>
          <p>{article.source.name}</p>
        </div>
        <div className='article-date'>
          <h2>Date</h2>
          <p>{article.publishedAt}</p>
        </div>
      </div>
      <MainModal
        open={open}
        onClose={handleClose}
        content={article.content}
        author={article.author}
        sourceUrl={article.url}
      />
    </>
  )
}

export default MainListItem
