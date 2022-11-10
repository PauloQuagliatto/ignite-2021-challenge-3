import styles from './header.module.scss'
import logoImg from '../../assets/logo.svg'

export default function Header() {
  return (
    <div>
      <img src={logoImg} alt="" />
      <h4>spacetraveling<span>.</span></h4>
    </div>
  )
}
