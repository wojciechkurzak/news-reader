import { Modal } from '@mui/material'
import { HeaderModalProps } from '../../types/header-types'
import { FormattedMessage } from 'react-intl'
import '../../styles/header/HeaderModal.scss'

const HeaderModal = ({ open, onClose }: HeaderModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className='header-modal'>
        <p>
          <FormattedMessage id='header.about' defaultMessage='About project' />
        </p>
        <p>
          Największą trudnością w tym projekcie było prawdopodobnie znalezienie
          odpowiedniego endpointa w News API, żeby w zwracanym JSON-nie były
          wszystkie informacje, a nie tylko częściowo, co widać gdy przejdzie
          się na inne zakładki :)
        </p>
        <p>
          Największą frajdę sprawiło mi tworzenie samego UI, które wciągnęło
          mnie bradziej niż myślałem
        </p>
      </div>
    </Modal>
  )
}

export default HeaderModal
