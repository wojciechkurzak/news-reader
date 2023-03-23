export type ArticleType = {
  author: string
  content: string
  description: string
  publishedAt: string
  source: {
    id: string
    name: string
  }
  title: string
  url: string
  urlToImage: string
}

export type MainListProps = {
  articles: ArticleType[]
}

export type MainListItemProps = {
  article: ArticleType
}

export type MainModalProps = {
  open: boolean
  onClose: () => void
  description: string
  author: string
  sourceUrl: string
}
