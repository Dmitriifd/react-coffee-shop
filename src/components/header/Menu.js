import { NavLink } from 'react-router-dom';
import './Menu.scss'

const Menu = ({ header, items, setMenuActive, menuActive, setActive }) => {
  // const clazz = active ? 'btn-light' : 'btn-outline-light'
  // className={`btn ${clazz}`}

    // ====================================================================
  	// const { name, salary, onDelete, increase, rise, onToggleProp } = props

		// let classNames = 'list-group-item d-flex justify-content-between'
		// if (increase) {
		// 	classNames += ' increase'
		// }
		// if (rise) {
		// 	classNames += ' like'
		// }

	return (
		<nav className={menuActive ? 'header__menu menu active' : 'header__menu menu'} onClick={() => setMenuActive(false)}>
			{/* <div className='overlay'></div> */}
			<div className='menu__content' onClick={(e) => e.stopPropagation()}>
				{/* <div className='menu__header'>{header}</div> */}
				<ul className='menu__list'>
					{items.map((item, i) => (
						<li className='menu__item' key={i}>
							<NavLink className={setActive} to={item.to}>
								{item.value}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Menu