import { h, render } from 'preact'
import { Provider } from 'unistore/preact'

import Router from './router'

import createStore from './store'

const root = document.getElementById('root')

const store = createStore(window.__STATE__)

render(
	<Provider store={store}>
		<Router />
	</Provider>,
	root,
	root.lastChild
)
