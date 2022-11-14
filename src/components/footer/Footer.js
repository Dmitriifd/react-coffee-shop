import Decor from 'components/UI/decor/Decro'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import './Footer.scss'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<div className='footer__inner'>
					<div className='footer__logo logo'>
						<Logo />
						<span>Coffee house</span>
					</div>
					<nav className='footer__menu menu'>
						<div className='menu__content'>
							<ul className='menu__list'>
								<li className='menu__item'>
									<a className='menu__link' href='#'>
										Our coffee
									</a>
								</li>
								<li className='menu__item'>
									<a className='menu__link' href='#'>
										For your pleasure
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<div className='footer__decor decor'>
					<Decor fill={'#000'} />
				</div>
			</div>
		</footer>
	)
}

export default Footer
