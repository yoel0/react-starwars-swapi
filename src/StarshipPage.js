import React from 'react';
import { Link } from 'react-router-dom';
import PilotList from './PilotList';

function Starship(props) {
	let starship = props.location.state;

	return (
		<div className='shipDiv'>
			{starship ? (
				<>
					<p>NAME: {starship.name}</p>
					<p>MODEL: {starship.model}</p>
					<PilotList pilots={starship.pilots} />
					<Link to={{ pathname: '/' }} className='returnBtn'>
						RETURN
					</Link>
				</>
			) : (
				<h3>Loading...</h3>
			)}
		</div>
	);
}

export default Starship;
