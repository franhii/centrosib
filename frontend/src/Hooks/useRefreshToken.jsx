import axios from '../Api/axios';
import useAuth from './useAuth';
const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const response = await axios.get('/api/v1/auth/refresh/', {
      withCredetianls: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.refreshToken);
      return { ...prev, accessToken: response.data.refreshToken };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
