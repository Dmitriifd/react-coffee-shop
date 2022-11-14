import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const SinglePage = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [post, setPost] = useState(null)

	// назад на 1 страницу
	const goBack = () => navigate(-1)
  
	{/* Для главной лучше использовать Link */}
	const goHome = () =>
		navigate('/', {
			replace: true,
		})

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => res.json())
			.then((data) => setPost(data))
	}, [id])

	return (
		<div className='container'>
			Post id: {id}
			<button className='btn' onClick={goBack}>
				goBack
			</button>
			{/* Для главной лучше использовать Link */}
			<button className='btn' onClick={goHome}>
				goHome
			</button>
			{post && (
				<>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
					<Link className='btn red' to={`/posts/${id}/edit`}>
						Edit post
					</Link>
				</>
			)}
		</div>
	)
}

export default SinglePage
