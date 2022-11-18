import Decor from "components/UI/decor/Decro"

const About = ({ photo, title, country, price }) => {
	return (
		<>
			<section className='coffee'>
				<div className='coffee__container container'>
					<div className='coffee__img'>
						<img src={photo} alt='photo' />
					</div>
					<div className='coffee__info'>
						<h2 className='coffee__title'>{title}</h2>
						<p className='coffee__country'>{country}</p>
						<div className='coffee__title-decor decor'>
							<Decor fill={'#000'} />
						</div>
						<div className='coffee__text'>
							Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly
							months do things on at. Situation recommend objection do intention so questions. As greatly removed
							calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect
							answered followed. At it went is song that held help face.
						</div>
						<p className='coffee__price'>{price}</p>
					</div>
				</div>
			</section>
		</>
	)
}

export default About
