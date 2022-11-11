import styles from './header.module.scss'

export default function Header() {
  return (
    <header styles={styles.headerContainer}>
      <div>
        <img src="/assets/logo.svg" alt="spacetraveling news" />
      </div>
    </header>
  )
}
