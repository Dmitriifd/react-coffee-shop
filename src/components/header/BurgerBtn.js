import './BurgerBtn.scss'

const BurgerBtn = ({ menuActive, setMenuActive }) => {
	return (
		<button className={menuActive ? 'header__btn active' : 'header__btn'} onClick={() => setMenuActive(!menuActive)}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	)
}

export default BurgerBtn
