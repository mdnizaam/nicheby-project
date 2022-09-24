import axios from 'axios';
import Cookie from 'js-cookie';
import { GoogleLogin } from 'react-google-login';
export const axiosApiCall = (url, method, body = {}) => axios({
    method,
    url: `${process.env.REACT_APP_API_BASE_URL}${url}`,
    data: body,
  });
export default function GoogleOAuth() {
  const onGoogleSuccess = (response) => {
    const access_token = response.accessToken;
    axiosApiCall(
      '/auth/google',
      'post',
      { access_token }
    ).then((res) => {
      const { user, token } = res.data;
      // Save the JWT inside a cookie
      Cookie.set('token', token);
    }).catch((err) => {
      throw new Error(err);
    })
  }
  const onGoogleFailure = () => {}
  return (
    <GoogleLogin 
      clientId="1051463501477-1bshr67ukml73hq7phee8ghbil750n2k.apps.googleusercontent.com"
      buttonText="Sign in with Google"
      onSuccess={onGoogleSuccess}
      onFailure={onGoogleFailure} />
  );
}