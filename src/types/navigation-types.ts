export type NavigationSearchBarProps = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export type NavigationListProps = {
  searched: string
}

export type NavigationListItemProps = {
  children: JSX.Element
  imageUrl: string
  alpha: string
}
