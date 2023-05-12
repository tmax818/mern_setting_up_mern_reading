import React from 'react'
import {Link} from "react-router-dom";


const PersonList = (props) => {
	return (
		<div>
			{props.people.map( (person, i) =>
				<p key={i}>{person.lastName}, {person.firstName} <Link to={`/people/${person._id}`}>{person.lastName}</Link></p>
			)}
		</div>
	)
}

export default PersonList;

