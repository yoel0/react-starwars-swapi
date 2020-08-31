import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
	return (
		<div className='starshipsDiv'>
			{props.starships.length > 0 ? (
				props.starships.map(starship => {
					let location = {
						pathname: '/starship',
						state: starship,
					};
					return (
						<Link to={location} key={starship.name} className='starshipBtn'>
							{starship.name}
						</Link>
					);
				})
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default Home;

// if (a) { b } else { c }
// a ? b : c
