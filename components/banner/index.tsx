import { FC } from 'react'
import styles from './styles.module.scss'

interface IBannerProps {
  buttonText: string
  handleOnClick: () => void
}

const Banner: FC<IBannerProps> = ({ buttonText, handleOnClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoissuer</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shop!</p>
      <button className={styles.button}>{buttonText}</button>
    </div>
  )
}

export default Banner
