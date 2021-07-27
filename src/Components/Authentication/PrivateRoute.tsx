import { Navigate, Route } from 'react-router';
import { useAuthentication } from '../../Context';

export const PrivateRoute = ({
	path,
	element,
}: {
	path: string;
	element: React.ReactElement;
}) => {
	const {
		authenticationState: { token },
	} = useAuthentication();
	return token ? (
		<Route path={path} element={element} />
	) : (
		<Navigate state={{ from: path }} replace to='/login' />
	);
};
