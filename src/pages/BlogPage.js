import Loader from 'components/loader/Loader'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const BlogPage = () => {
	const [posts, setPosts] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	async function fetchPosts() {
		const url = 'https://jsonplaceholder.typicode.com/posts'
		setIsLoading(true)
		setTimeout(async () => {
			const res = await fetch(`${url}`).then((res) => res.json())
			setPosts(res)
			setIsLoading(false)
		}, 1000)
	}

	useEffect(() => {
		// setIsLoading(true)
		// fetch('https://jsonplaceholder.typicode.com/posts')
		// 	.then((res) => res.json())
		// 	.then((data) => {
		//     setIsLoading(false)
		//     return setPosts(data)
		//   })
		fetchPosts()
	}, [])

	return (
		<div className='container' style={{ textAlign: 'center' }}>
			{isLoading ? (
				<Loader />
			) : (
				<ul>
					{posts.map((post) => (
						<li key={post.id}>
							<Link to={`/posts/${post.id}`}>{post.title}</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default BlogPage
