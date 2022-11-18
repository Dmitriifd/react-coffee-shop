import About from 'components/about/About'
import PageHeader from 'components/page-header/PageHeader'
import { DataContext } from 'context'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import photo from '../assets/img/photo-3.jpg'

const SinglePage = () => {
	const navigate = useNavigate()
	const { id } = useParams()
  
	const goBack = () => navigate(-1)
	const data = useContext(DataContext)

	const { country, price } = data.find((item) => item.id === +id)

	return (
		<>
			<PageHeader title='Our Coffee' />
			<About photo={photo} title='About it' country={country} price={price} />
			{/* <button className='btn' onClick={goBack}>
				Назад
			</button> */}
		</>
	)
}

export default SinglePage
