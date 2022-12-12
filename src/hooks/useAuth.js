import { useSelector } from 'react-redux';

export const useAuth = () => {
	const { user } = useSelector((state) => state.user);
	return true || (user && Object.prototype.hasOwnProperty.call(user, 'id'));
};
