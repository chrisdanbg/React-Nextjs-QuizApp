import { Component } from "react"
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
 
import Auth from '../../components/auth';


class Admin extends Component {
    render() {
        return(
            <Auth>
                <br />
                <Link href='/admin/create'>
                    <Button className="my-2">Create Question</Button>
                </Link>
            </Auth>
        );
    }
}

export default Admin;