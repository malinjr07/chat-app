import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes: FC = () => {
  let auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoutes;

