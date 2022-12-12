import { useAuth0 } from '@auth0/auth0-react';

function Home() {
	const { loginWithRedirect, isAuthenticated, user } = useAuth0();
	console.log({ loginWithRedirect, isAuthenticated, user });

	return <button onClick={() => loginWithRedirect()}>Log In</button>;
}

export default Home;
