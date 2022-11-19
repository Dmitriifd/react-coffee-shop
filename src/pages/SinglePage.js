import About from 'components/about/About'
import PageHeader from 'components/page-header/PageHeader'
import { useParams } from 'react-router-dom'
import photo from '../assets/img/photo-3.jpg'

const SinglePage = ({ data }) => {
	const { id } = useParams()
	const { country, price } = data.find((item) => item.id === +id)

	return (
		<>
			<PageHeader title="Our Coffee" />
			<About photo={photo} title="About it" country={country} price={price} />
		</>
	)
}

export default SinglePage
