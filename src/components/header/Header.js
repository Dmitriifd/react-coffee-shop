import { useState } from 'react'
import { Link } from 'react-router-dom'
import BurgerBtn from './BurgerBtn'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import './Header.scss'
import Menu from './Menu'

// Смена стандартного класса у NavLink 'active' на свой
const setActive = ({ isActive }) => (isActive ? 'menu__link menu__link-active' : 'menu__link')

const Header = () => {

  const items = [
		{ value: 'Our coffee', to: '/coffee' },
		{ value: 'For your pleasure', to: '/goods' },
	]

  const [menuActive, setMenuActive] = useState(false)

	return (
		<header className='header'>
			<div className='header__container container'>
				<Link to='/' className='header__logo logo'>
					<Logo />
					<span>Coffee house</span>
				</Link>
				<Menu
					setActive={setActive}
					setMenuActive={setMenuActive}
					menuActive={menuActive}
					header={'Бургер меню'}
					items={items}
				/>
				<BurgerBtn menuActive={menuActive} setMenuActive={setMenuActive} />
			</div>
		</header>
	)
}

export default Header
