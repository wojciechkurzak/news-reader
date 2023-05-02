import { HeaderButtonProps } from '../../../types/header-types'
import './HeaderButton.scss'

const HeaderButton = ({ icon, active, onClick }: HeaderButtonProps) => {
  return (
    <button className={active} onClick={onClick}>
      {icon}
    </button>
  )
}

export default HeaderButton
