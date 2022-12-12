import { Link } from 'react-router-dom';

function Error() {
	return (
		<div>
			Sorry, the page you visited does not exist.
			<Link to="/">
				<button type="primary">Back Home</button>
			</Link>
		</div>
	);
}

export default Error;
