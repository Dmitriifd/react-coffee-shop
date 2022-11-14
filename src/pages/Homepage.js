import Button from 'components/UI/button/Button'
import Decor from 'components/UI/decor/Decro'
import product from '../assets/img/product-1.jpg';

const Homepage = () => {
	return (
		<>
			<section className='intro'>
				<div className='intro__container container'>
					<div className='intro__heading'>
						<h1 className='intro__title title'>Everything You Love About Coffee</h1>
						<div className='intro__title-decor decor'>
							{/* <Decor className='decor__img' alt='decor' /> */}
							<Decor className='decor__img' />
						</div>
					</div>
					<p className='intro__descr'>We makes every day full of energy and taste</p>
					<p className='intro__descr'>Want to try our beans?</p>
					<Button>More</Button>
				</div>
			</section>
			<section className='about'>
				<div className='about__container container'>
					<h2 className='about__title'>About Us</h2>
					<div className='about__title-decor decor'>
						<Decor className='decor__img' fill={'#000'} />
					</div>
					<p className='about__text'>
						Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months
						do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased
						improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At
						it went is song that held help face.
					</p>
					<p className='about__text'>
						Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for
						ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness
						furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son
						repair day ladies now.
					</p>
				</div>
			</section>
			<section className='goods'>
				<div className='goods__container container'>
					<h2 className='goods__title'>Our best</h2>
					<ul className='about__list'>
						<li className='about__item card'>
							<a className='about__link card__link' href='#'>
								<img className='card__img' src={product} alt='img' />
								<h3 className='card__title'>Solimo Coffee Beans 2 kg</h3>
								<p className='card__price'>10.73$</p>
							</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	)
}

export default Homepage
