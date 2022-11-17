import { Route, Routes, Navigate } from 'react-router-dom'
import Coffee from 'pages/Coffee'
import Layout from 'components/layouts/Layout'
import Homepage from 'pages/Homepage'
import SinglePage from 'pages/SinglePage'
import Notfoundpage from 'pages/Notfoundpage'
import Goods from 'pages/Goods'


function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Homepage />} />
				<Route path='coffee' element={<Coffee />} />
				<Route path='goods' element={<Goods />} />
				<Route path='product/:id' element={<SinglePage />} />
				<Route path='*' element={<Notfoundpage />} />
			</Route>
		</Routes>
	)
}

export default App
