import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../components/firebase';
import fb from 'firebase'
import { Component } from 'react';
import Link from 'next/link';
import {Container, Navbar, NavbarBrand, Nav, NavDropdown} from 'react-bootstrap';

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      fb.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

class Auth extends Component {
  
  constructor(props) {
    super(props);
    this.state =  {
      isSignedIn: false // Local signed-in state.
    };
  }

    // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => {
        if (user && user.email === "chrisdanbg@infantjoy.bg") {
          this.setState({isSignedIn: true})
        } else {
          this.setState({isSignedIn: false})
        }
      }
    );
  }
    
    // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={uiConfig}  firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>
          <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        
        <Navbar bg='light' variant="light">
          <Container>
            <Link href="/">
              <Navbar.Brand href="/">
                  Quiz App
              </Navbar.Brand>
            </Link>
            <Nav className="ml-auto">
              <Link href="/">
                <Nav.Link href="/">Home</Nav.Link>
              </Link>
              <Link href="/">
                <Nav.Link> 
                  <a className="m-2" onClick={() => firebase.auth().signOut()}>Sign-out</a>
                </Nav.Link>
              </Link>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default Auth