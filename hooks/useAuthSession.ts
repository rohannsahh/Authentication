import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { loginUser, logout } from '../store/slices/authSlice';

const useAuthSession = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, token, loading, error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Verify token and fetch user data if needed
      // dispatch(fetchUserData(storedToken));
    }
  }, [dispatch]);

  const login = (credentials: { username: string; password: string }) => dispatch(loginUser(credentials));
  const signOut = () => {
    localStorage.removeItem('token');
    dispatch(logout());
  };

  return { user, token, loading, error, login, signOut };
};

export default useAuthSession;
