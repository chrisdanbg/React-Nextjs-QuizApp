import { Component } from "react"
import Link from 'next/link'

import Auth from '../../components/auth';


class Admin extends Component {
    render() {
        return(
            <Auth>
                <Link href='/admin/create'>
                    <button>Create Question</button>
                </Link>
            </Auth>
        );
    }
}

export default Admin;