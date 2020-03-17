import { Component } from "react"
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
 
import Auth from '../../components/auth';
import firebase from '../../components/firebase';
import DataTable from "../../components/datatable";

class AdminPanel extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    static async getInitialProps(ctx) {
        let questionsList = []
        await firebase.firestore().collection('questions').get()
        .then(snapshot => { 
            snapshot.forEach((doc) => {
    
                let questionToDisplay = {
                    id: doc.id,
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

    
    handleDelete = async (key) => {
        const itemId = key.target.value;

        var confirm = window.confirm("Изтрий този въпрос?")
        if (confirm) {
            firebase.firestore().collection('questions').doc(itemId).delete().then(function() {
                location.reload();
            }).catch(function(error) {
                window.alert((`Error removing document: ${error}`));
            });
        }
    }
  

    render() {
        return(
            <Auth>
                <h2 className="display-4 my-3">Available quesitons</h2>
                <hr></hr>
                <DataTable handleDelete={this.handleDelete} content={this.props.questions}/>
                <Link href='/admin/create'>
                    <Button className="mt-5 float-right">Create Question</Button>
                </Link>
            </Auth>
        );
    }
}

export default AdminPanel;