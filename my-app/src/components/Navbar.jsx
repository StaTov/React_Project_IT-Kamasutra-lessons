
import s from './Header.module.css'
const Navbar = () => {
  return <nav className={s.nav}>
    <div className={s.item}>Profile</div>
    <div className={s.item}>Text</div>
    <div className={s.item}>Message</div>
    <div className={s.item}>Settings</div>
  </nav>
}

export default Navbar;