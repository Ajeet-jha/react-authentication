import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { logout as logoutAction } from '../../store/actions';

function User() {
	const { isAuthenticated, logout, user } = useAuth0();
	const { name, picture, email_verified: isVarified } = user;
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isAuthenticated) {
			dispatch(logoutAction());
		}
	}, [isAuthenticated]);

	return (
		<section>
			<div>
				<p>Hello {name}</p>
				<img src={picture} alt={name} />
				{isVarified ? (
					<p>Your email is not verified</p>
				) : (
					<p>Your email is verified</p>
				)}
			</div>
			<div>
				<button onClick={() => logout({ returnTo: window.location.origin })}>
					Log Out
				</button>
			</div>
		</section>
	);
}

export default User;
