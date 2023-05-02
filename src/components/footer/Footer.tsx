import { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import '../../styles/footer/Footer.scss'

const Footer = () => {
  const [time, setTime] = useState<string>('')

  const articlesCount = useAppSelector((state) => state.articleCount.value)

  const handleTime = () => {
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    const seconds = new Date().getSeconds()

    const formatedTime = `${hours < 10 ? '0' + hours : hours}:${
      minutes < 10 ? '0' + minutes : minutes
    }:${seconds < 10 ? '0' + seconds : seconds}`

    setTime(formatedTime)
  }

  useEffect(() => {
    const interval = setInterval(handleTime, 1000)
    return () => clearInterval(interval)
  })

  return (
    <footer>
      <div>
        <p>{time}</p>
      </div>
      <div>
        <p>
          Articles count: <span>{articlesCount}</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
