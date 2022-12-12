import { Link } from 'react-router-dom';

function Error() {
	return (
		<div>
			<h1>Sorry, the page you visited does not exist.</h1>
			<Link to="/">
				<button type="primary">Back Home</button>
			</Link>
		</div>
	);
}

export default Error;
