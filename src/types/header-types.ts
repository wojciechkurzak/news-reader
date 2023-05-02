export type HeaderButtonProps = {
  icon: JSX.Element
  active?: string | undefined
  onClick: () => void
}

export type HeaderModalProps = {
  open: boolean
  onClose: () => void
}
