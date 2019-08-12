import React, { FC } from 'react'
import { Grid } from '../Grid/Grid'

import logo from '../../logo.svg'
import './App.css'

const App: FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<article>
				<Grid />
			</article>
		</div>
	)
}

export default App
