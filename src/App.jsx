
import UserRoutes from './components/UserRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from './components/Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
console.log("isRefreshing",isRefreshing);
  useEffect(() => {
    dispatch(getCurrentUser());
    console.log("getCurrentUser()",getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing && <Loader/>}
      {!isRefreshing && <UserRoutes />}
    </>
  );
};


export default App;