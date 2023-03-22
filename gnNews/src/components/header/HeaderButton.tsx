import { HeaderButtonProps } from '../../types/header-types'
import '../../styles/Header/HeaderButton.scss'

const HeaderButton = ({ icon, active, onClick }: HeaderButtonProps) => {
  return (
    <button className={active} onClick={onClick}>
      {icon}
    </button>
  )
}

export default HeaderButton
