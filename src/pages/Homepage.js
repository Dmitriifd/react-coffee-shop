import Card from 'components/card/Card'
import Button from 'components/UI/button/Button'
import Decor from 'components/UI/decor/Decro'

const Homepage = ({ data }) => {
	return (
		<>
			<section className="intro">
				<div className="intro__container container">
					<div className="intro__heading">
						<h1 className="intro__title title">Everything You Love About Coffee</h1>
						<div className="intro__title-decor decor">
							{/* <Decor className='decor__img' alt='decor' /> */}
							<Decor className="decor__img" />
						</div>
					</div>
					<p className="intro__descr">We makes every day full of energy and taste</p>
					<p className="intro__descr">Want to try our beans?</p>
					<Button>More</Button>
				</div>
			</section>
			<section className="about">
				<div className="about__container container">
					<h2 className="about__title">About Us</h2>
					<div className="about__title-decor decor">
						<Decor className="decor__img" fill={'#000'} />
					</div>
					<p className="about__text">
						Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months
						do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased
						improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At
						it went is song that held help face.
					</p>
					<p className="about__text">
						Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for
						ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness
						furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son
						repair day ladies now.
					</p>
				</div>
			</section>
			<section className="goods">
				<div className="goods__container container">
					<h2 className="goods__title">Our best</h2>
					<ul className="about__list">
						{data.map((item, i) => {
							if (i >= 3) return
							return <Card key={i} {...item} />
						})}
					</ul>
				</div>
			</section>
		</>
	)
}

export default Homepage
