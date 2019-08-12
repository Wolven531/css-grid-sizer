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
			<div className="child child1">child 1</div>
			<div className="child child2">child 2</div>
			<div className="child child3">child 3</div>
			<div className="child child4">child 4</div>
			<div className="child child5">child 5</div>
			<div className="child child6">child 6</div>
			<div className="child child7">child 7</div>
			<div className="child child8">child 8</div>
			<div className="child child9">child 9</div>
		</div>
	)
}

export { Grid }
