import { BrowserRouter as Router } from 'react-router-dom'

import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.scss'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Router basename="/react-coffee-shop">
		<App />
	</Router>
)
