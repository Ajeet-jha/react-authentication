import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/actions';

function Home() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loginWithRedirect, isAuthenticated, user } = useAuth0();

	useEffect(() => {
		if (isAuthenticated && user) {
			dispatch(login(user));
			navigate('/user');
		}
	}, [isAuthenticated, user]);

	return <button onClick={() => loginWithRedirect()}>Log In</button>;
}

export default Home;
