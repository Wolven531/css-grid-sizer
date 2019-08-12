import React, { FC } from 'react'
// import logo from '../../logo.svg'

// import './Grid.css'

const Grid: FC = () => {
	return (
		<div className="grid" style={{
			borderColor: '#fff',
			display: 'grid',
			gridAutoColumns: '33%',
			gridAutoFlow: 'row',
			gridAutoRows: '33%',
			gridRowGap: '5px',
			height: '300px',
			width: '100vw',
		}}>
			<div>child 1</div>
			<div>child 2</div>
			<div>child 3</div>
			<div>child 4</div>
			<div>child 5</div>
			<div>child 6</div>
			<div>child 7</div>
			<div>child 8</div>
			<div>child 9</div>
		</div>
	)
}

export { Grid }
