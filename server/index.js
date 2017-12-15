import express from 'express'
import path from 'path'
import { readFileSync } from 'fs'

import { h } from 'preact'
import render from 'preact-render-to-string'
import { Provider } from 'unistore/preact'

import Router from '../src/router'
import createStore from '../src/store'

const app = express()

const JS = readFileSync(path.resolve('build/index.js'), 'utf-8')

const PORT = process.env.PORT || 3000

const AppShell = (html, state) => `
	<html lang="en-US">
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title> Counter App! </title>
		</head>
		<body>
			<div id="root">${html}</div>
			<script>window.__STATE__=${JSON.stringify(state).replace(/<|>/g, '')}</script>
			<script>${JS}</script>
		</body>
	</html>
`

app.use('/build', express.static(path.resolve('build')))

app.get('**', (req, res) => {
	const store = createStore({ count: 0 })

	let state = store.getState()

	let html = render(
		<Provider store={store}>
			<Router />
		</Provider>
	)

	res.send(AppShell(html, state))
})

app.listen(PORT, () => {
	console.log('> Connected to PORT: ', PORT)
})
