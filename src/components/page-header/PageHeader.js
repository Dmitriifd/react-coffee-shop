import './PageHeader.scss'

const PageHeader = ({title}) => {
	return (
		<section className='page-header'>
			<div className='page-header__container container'>
				<h1 className='page-header__title'>{title}</h1>
			</div>
		</section>
	)
}

export default PageHeader
