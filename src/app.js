import { h } from 'preact'
import { Link } from 'preact-router'
import { connect } from 'unistore/preact'

import { actions } from './store'

export default connect('count', actions)(({ count, increment }) => (
	<div>
		<p>Count: {count}</p>
		<button onClick={increment}>Increment</button>
		<Link href="/about"> About Me! </Link>
	</div>
))
