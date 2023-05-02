import { Modal } from '@mui/material'
import { MainModalProps } from '../../types/main-types'
import { FormattedMessage } from 'react-intl'
import '../../styles/main/MainModal.scss'

const MainModal = ({
  open,
  onClose,
  description,
  author,
  sourceUrl,
}: MainModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className='main-modal'>
        <div className='article-description'>
          <p>
            <FormattedMessage
              id='item.description'
              defaultMessage='Description'
            />
          </p>
          <p>{description ? description : 'No description'}</p>
        </div>
        <div className='article-author'>
          <p>
            <FormattedMessage id='item.author' defaultMessage='Author' />
          </p>
          <p>{author}</p>
        </div>
        <div className='article-source-url'>
          <p>
            <FormattedMessage id='item.sourceurl' defaultMessage='Source url' />
          </p>
          <a href={sourceUrl}>{sourceUrl}</a>
        </div>
      </div>
    </Modal>
  )
}

export default MainModal
