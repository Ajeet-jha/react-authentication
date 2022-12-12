import { useAuth0 } from '@auth0/auth0-react';

function User() {
	const { logout, user } = useAuth0();

	return (
		<>
			<button onClick={() => logout({ returnTo: window.location.origin })}>
				Log Out
			</button>
			{JSON.stringify(user, null, 2)}
		</>
	);
}

export default User;
