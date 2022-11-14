import { useParams } from 'react-router-dom'

const EditPage = () => {
  const { id } = useParams()

	return (
		<div className='container'>
			<h1>Edit page {id}</h1>
		</div>
	)
}

export default EditPage
