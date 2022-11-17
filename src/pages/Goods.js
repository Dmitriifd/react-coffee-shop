import About from 'components/about/About'
import PageHeader from 'components/page-header/PageHeader'
import photo from '../assets/img/photo-2.jpg'

const Goods = () => {
	return (
		<>
			<PageHeader title='For your pleasure' />
			<About photo={photo} title='About our goods' />
		</>
	)
}
export default Goods
