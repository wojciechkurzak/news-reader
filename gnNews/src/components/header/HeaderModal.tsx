import { Modal } from '@mui/material'
import { HeaderModalProps } from '../../types/header-types'
import '../../styles/Header/HeaderModal.scss'

const HeaderModal = ({ open, onClose }: HeaderModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className='header-modal'>
        <p>About project</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          magnam minima sunt corrupti? Dolores eligendi quis nihil, libero
          corporis quibusdam iusto eveniet dicta unde aliquid labore earum id, a
          tempora?
        </p>
      </div>
    </Modal>
  )
}

export default HeaderModal
