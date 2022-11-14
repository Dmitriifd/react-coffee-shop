import { Route, Routes, Navigate } from 'react-router-dom'
import About from 'pages/About'
import Layout from 'components/layouts/Layout'
import Homepage from 'pages/Homepage'
import SinglePage from 'pages/SinglePage'
import Notfoundpage from 'pages/Notfoundpage'


function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Homepage />} />
				<Route path='about' element={<About />} />
				<Route path='contacts' element={<h1>Contacts</h1>} />
				<Route path='product/:id' element={<SinglePage />} />
				<Route path='*' element={<Notfoundpage />} />
			</Route>
		</Routes>
	)
}

export default App
