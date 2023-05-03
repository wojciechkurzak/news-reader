export type ArticleType = {
  author: string
  description_en: string
  description_pl: string
  publishedAt: string
  source: string
  title_en: string
  title_pl: string
  urlToArticle: string
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
