import { Route, Routes, Navigate } from 'react-router-dom'
import Coffee from 'pages/Coffee'
import Layout from 'components/layouts/Layout'
import Homepage from 'pages/Homepage'
import SinglePage from 'pages/SinglePage'
import Notfoundpage from 'pages/Notfoundpage'
import Goods from 'pages/Goods'
import { DataContext } from 'context'

import img1 from './assets/img/product-1.jpg'
import img2 from './assets/img/product-2.jpg'
import img3 from './assets/img/product-3.jpg'
import { useState } from 'react'

function App() {
	const data = [
		{ title: 'Solimo Coffee Beans 2 kg', image: img1, price: '10.73$', country: 'Brazil', id: 1 },
		{ title: 'Presto Coffee Beans 1 kg', image: img2, price: '15.99$', country: 'Kenya', id: 2 },
		{ title: 'AROMISTICO Coffee 1 kg', image: img3, price: '6.99$', country: 'Columbia', id: 3 },
		{ title: 'AROMISTICO Coffee 1 kg', image: img3, price: '10.73$', country: 'Brazil', id: 4 },
		{ title: 'AROMISTICO Coffee 1 kg', image: img3, price: '6.99$', country: 'Kenya', id: 5 },
		{ title: 'AROMISTICO Coffee 1 kg', image: img3, price: '15.99$', country: 'Columbia', id: 6 },
	]

	const [state, setState] = useState(data)

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Homepage data={state} />} />
				<Route path='coffee' element={<Coffee data={state} />} />
				<Route path='goods' element={<Goods />} />
				<Route path='coffee/product/:id' element={<SinglePage data={state} />} />
				<Route path='*' element={<Notfoundpage />} />
			</Route>
		</Routes>
	)
}

export default App
