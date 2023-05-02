import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { changeArticleView } from '../../../redux/features/article-view-slice'
import { ArticleViewStateType } from '../../../types/store-types'
import { FaListUl, FaBars } from 'react-icons/fa'
import { HiSquares2X2 } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import HeaderButton from '../HeaderButton/HeaderButton'
import { changeMenuVisible } from '../../../redux/features/menu-visible-slice'
import logo from '../../../images/logo.png'
import './Header.scss'

const Header = () => {
  const navigate = useNavigate()

  const articleView = useAppSelector((state) => state.articleView.type)
  const menuVisible = useAppSelector((state) => state.menuVisible.visible)
  const dispatch = useAppDispatch()

  const handleNavigateHome = (): void => {
    navigate(`/`)
  }

  const handleToggleMenu = (): void => {
    dispatch(changeMenuVisible(!menuVisible))
  }

  const handleArticleViewChange = (type: ArticleViewStateType): void => {
    dispatch(changeArticleView(type))
  }

  return (
    <header>
      <div className='header-title'>
        <HeaderButton icon={<FaBars />} onClick={handleToggleMenu} />
        <h1 onClick={handleNavigateHome}>
          <div className='title'>
            <img src={logo} alt='logo' />
            <p>NewsReader</p>
          </div>
        </h1>
      </div>
      <div className='header-buttons'>
        <HeaderButton
          icon={<FaListUl />}
          active={articleView === 'list' ? 'active' : undefined}
          onClick={() => handleArticleViewChange('list')}
        />
        <HeaderButton
          icon={<HiSquares2X2 />}
          active={articleView === 'grid' ? 'active' : undefined}
          onClick={() => handleArticleViewChange('grid')}
        />
      </div>
    </header>
  )
}

export default Header
