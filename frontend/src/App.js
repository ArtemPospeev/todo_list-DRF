import './App.css';
import React from 'react';
import axios from "axios";
import UserList from "./components/Users";
import MenuList from "./components/Menu";
import FooterList from "./components/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'menu': [],
            'footer': []
        };
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/users')
            .then(response => {
                const users = response.data['results']
                console.log(users)
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))

        this.state.menu = [
            {
                name: 'Main page',
                link: '#'
            },
            {
                name: 'API documentations',
                link: '#'
            },
            {
                name: 'Contacts',
                link: '#'
            }
        ]

        this.state.footer = [
            {
                name: 'About US',
                link: '#'
            },
            {
                name: 'Show all products',
                link: '#'
            },
            {
                name: 'rest@django.local',
                link: '#'
            }
        ]
    }

    render() {
        return (
            <div>
                <MenuList blocks={this.state.menu}/>
                <UserList users={this.state.users}/>
                <FooterList blocks={this.state.footer}/>
            </div>
        )
    }
}

export default App;
