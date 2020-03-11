import { Component } from "react"
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
 
import Auth from '../../components/auth';
import firebase from '../../components/firebase';

class AdminPanel extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        let questionsList = []
        await firebase.firestore().collection('questions').get()
        .then(snapshot => { 
            snapshot.forEach((doc) => {
                let questionToDisplay = {
                    title: doc.data().question,
                    answers: doc.data().answers,
                    image: doc.data().image
                }
                questionsList.push(questionToDisplay);
            })
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
        return { questions: questionsList }
    }

    renderQuestions(key) {
        console.log(key)
        return(
          <div>
              <h1>{key.title}</h1>
              <img src={key.image}></img>
          </div>
        );
    }

    render() {
        return(
            <Auth>
                {this.props.questions.map(this.renderQuestions)}
                <br />
                <Link href='/admin/create'>
                    <Button className="my-2">Create Question</Button>
                </Link>
            </Auth>
        );
    }
}

export default AdminPanel;