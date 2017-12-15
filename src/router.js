import { h } from 'preact'
import Router from 'preact-router'

import App from './app'
import About from './about'

export default () => (
	<Router>
		<App path="/" />
		<About path="/about" />
	</Router>
)
