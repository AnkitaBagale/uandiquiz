import { Navigate, Route } from 'react-router';
import { useAuthentication } from '../../Context';

export const UserRoute = ({
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
		<Navigate replace to='/profile' />
	) : (
		<Route path={path} element={element} />
	);
};
