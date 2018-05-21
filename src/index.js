import React from 'react'
import { render } from 'react-dom'


import App from './components/ui/App'

window.React = React

render(
	<App/>,
	document.getElementById('root'))
