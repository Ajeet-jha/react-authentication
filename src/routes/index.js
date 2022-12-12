import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages';
import User from '../pages/user';
import Error from '../pages/error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Error />,
	},
	{
		path: '/user',
		element: <User />,
	},
]);

export default router;
