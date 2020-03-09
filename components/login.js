import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../components/firebase';
import fb from 'firebase'

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      fb.auth.EmailAuthProvider.PROVIDER_ID
    ]
  };

function Login() {
    return(
        <div>
            <StyledFirebaseAuth uiConfig={uiConfig}  firebaseAuth={firebase.auth()}/>
        </div>
    );
}

export default Login