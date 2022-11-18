import { Route, Routes, Navigate } from 'react-router-dom'
import Coffee from 'pages/Coffee'
import Layout from 'components/layouts/Layout'
import Homepage, { data } from 'pages/Homepage'
import SinglePage from 'pages/SinglePage'
import Notfoundpage from 'pages/Notfoundpage'
import Goods from 'pages/Goods'
import { DataContext } from 'context'

function App() {
	return (
		<DataContext.Provider value={data}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path='coffee' element={<Coffee />} />
					<Route path='goods' element={<Goods />} />
					<Route path='product/:id' element={<SinglePage />} />
					<Route path='*' element={<Notfoundpage />} />
				</Route>
			</Routes>
		</DataContext.Provider>
	)
}

export default App
