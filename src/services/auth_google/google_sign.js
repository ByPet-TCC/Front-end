
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

<GoogleOAuthProvider clientId="766217528639-2hinu25aivjvu6qi067p921amv0rin92.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={credentialResponse => {

                let decoded = jwt_decode(credentialResponse.credential);

                console.log(decoded);
              }}
              onError={() => {
                console.log('Login Failed');
              }}

            />;
          </GoogleOAuthProvider>
