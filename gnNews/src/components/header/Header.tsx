import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { changeArticleView } from '../../redux/features/article-view-slice'
import { ArticleStateType } from '../../types/store-types'
import { FaListUl } from 'react-icons/fa'
import { HiSquares2X2 } from 'react-icons/hi2'
import { BsQuestionLg } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import HeaderButton from './HeaderButton'
import HeaderModal from './HeaderModal'
import '../../styles/Header/Header.scss'

const Header = () => {
  const [open, setOpen] = useState<boolean>(false)

  const navigate = useNavigate()

  const articleView = useAppSelector((state) => state.articleView.type)
  const dispatch = useAppDispatch()

  const handleNavigateHome = (): void => {
    navigate(`/`)
  }

  const handleOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  const handleArticleViewChange = (type: ArticleStateType): void => {
    dispatch(changeArticleView(type))
  }

  return (
    <>
      <header>
        <h1 onClick={handleNavigateHome}>gnNews</h1>
        <div className='header-buttons'>
          <HeaderButton
            icon={<FaListUl />}
            active={articleView === 'list' ? 'active' : undefined}
            onClick={() => handleArticleViewChange('list')}
          />
          <HeaderButton
            icon={<HiSquares2X2 />}
            active={articleView === 'tiles' ? 'active' : undefined}
            onClick={() => handleArticleViewChange('tiles')}
          />
          <HeaderButton icon={<BsQuestionLg />} onClick={handleOpen} />
        </div>
      </header>
      <HeaderModal open={open} onClose={handleClose} />
    </>
  )
}

export default Header
