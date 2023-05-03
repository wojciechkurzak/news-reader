import { useState } from 'react'
import { MainListItemProps } from '../../../types/main-types'
import { useAppSelector } from '../../../redux/hooks'
import { MdOutlineHideImage } from 'react-icons/md'
import { FormattedMessage } from 'react-intl'
import MainModal from '../MainModal/MainModal'
import './MainListItem.scss'

const MainListItem = ({ article }: MainListItemProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const articleView = useAppSelector((state) => state.articleView.type)
  const articleLang = useAppSelector((state) => state.languageChange.lang)

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
        <div className='article-image'>
          {article.urlToImage ? (
            <img src={article.urlToImage} alt='article image' />
          ) : (
            <div className='teaser'>
              <MdOutlineHideImage />
            </div>
          )}
        </div>
        <div className='article-title'>
          <h2>
            <FormattedMessage id='item.title' defaultMessage='Title' />
          </h2>
          <p>{articleLang === 'en-US' ? article.title_en : article.title_pl}</p>
        </div>
        <div className='article-source'>
          <h2>
            <FormattedMessage id='item.source' defaultMessage='Source' />
          </h2>
          <p>{article.source}</p>
        </div>
        <div className='article-date'>
          <h2>
            <FormattedMessage id='item.date' defaultMessage='Date' />
          </h2>
          <p>{article.publishedAt}</p>
        </div>
      </div>
      <MainModal
        open={open}
        onClose={handleClose}
        description={
          articleLang === 'en-US'
            ? article.description_en
            : article.description_pl
        }
        author={article.author}
        sourceUrl={article.urlToArticle}
      />
    </>
  )
}

export default MainListItem
