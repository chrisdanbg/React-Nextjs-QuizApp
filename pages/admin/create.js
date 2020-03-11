import Auth from "../../components/auth";
import {Form, Container,Button} from 'react-bootstrap';

import firebase from '../../components/firebase';
import { useState } from "react";


function Create() {
    
    const [question, setQuestion]  = useState({
        title: '',
        correctAnswer: '',
        otherAnswer1: '',
        otherAnswer2: '',
        otherAnswer3: ''
    })
    const [isSubmited, setSubmited] = useState(false)
    const [error, setError] = useState('');

    const handleChange = e => {
        setQuestion({ ...question, [e.target.name]: e.target.value });
        handleValidation();
    }

    const handleSubmit = (e) => {
    
        if (!handleValidation())
            return;

        firebase.firestore().collection('questions').doc().set(question);
        setSubmited(true);
    }

    const handleValidation = () => {
        if(!question["title"] || !question["correctAnswer"] || !question["otherAnswer1"] || !question["otherAnswer2"] || !question["otherAnswer3"]){
            setError("All fields must be filled before submiting the question")
            return false;
        }

        setError('');
        return true;
    }

    const renderNewQuestionForm = () => {
        return(
            <div>
            <h1>Create Question Page</h1>
            <Form>
                <Form.Control name="title" onChange={handleChange} className="my-2" placeholder="Question title" required/>
                <Form.Control name="correctAnswer" onChange={handleChange} className="my-2" placeholder="Correct answer" required/>
                <Form.Control name="otherAnswer1" onChange={handleChange} className="my-2" placeholder="Other answer 1" required/>
                <Form.Control name="otherAnswer2" onChange={handleChange} className="my-2" placeholder="Other answer 2" required/>
                <Form.Control name="otherAnswer3" onChange={handleChange} className="my-2" placeholder="Other answer 3" required/>
                <span style={{color: "red"}}>{error}</span>
            </Form>
            <Button onClick={handleSubmit} className="my-2" disabled={error ? true : false} >Submit</Button> <br />
        </div>
        )
    }
    
    const renderSubmitedConfirm = () => {
        return(
            <h1>SUBMITED</h1>
        )
    }

    return(
        <Auth>
            <Container>
                {!isSubmited ? renderNewQuestionForm() : renderSubmitedConfirm()}
            </Container>
        </Auth>
    )
}

export default Create