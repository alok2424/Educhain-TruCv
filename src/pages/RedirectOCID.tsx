import { LoginCallBack } from '@opencampus/ocid-connect-js';
import { useNavigate } from 'react-router-dom';

const Redirect: React.FC = () => {
  const navigate = useNavigate();

  const loginSuccess = (): void => {
    console.log('Login successful!');
    navigate('/user');
  };

  const loginError = (error: unknown): void => {
    console.error('Login failed:', error);
  };

  return (
    <LoginCallBack
      successCallback={loginSuccess}
      errorCallback={loginError}
      customErrorComponent={undefined}
      customLoadingComponent={undefined}
    />
  );
};

export default Redirect;
