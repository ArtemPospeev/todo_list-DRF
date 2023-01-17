import './App.css';
import React from 'react';
import axios from "axios";
import UserList from "./components/Users";
import MenuList from "./components/Menu";
import FooterList from "./components/Footer";
import ProjectList from "./components/Projects";
import TodoList from "./components/Todo";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'todo': [],
            'projects': [],
            'menu': [],
            'footer': []
        };
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/users')
            .then(response => {
                const users = response.data.results
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/TODO')
            .then(response => {
                const todo = response.data.results
                this.setState(
                    {
                        'todo': todo
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/projects')
            .then(response => {
                const projects = response.data.results
                this.setState(
                    {
                        'projects': projects
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
            <div className="App">
                <BrowserRouter>
                    <nav className="menu">
                        <ul>
                            <li>
                                <Link to="/">Users</Link>
                                <Link to="/projects">Projects</Link>
                                <Link to="/todo">Tasks</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={() => <MenuList blocks={this.state.menu}/>}/>
                        <Route exact path="/" component={() => <UserList users={this.state.users}/>}/>
                        <Route exact path="/" component={() => <FooterList blocks={this.state.footer}/>}/>
                        <Route exact path="/projects" component={() => <ProjectList items={this.state.projects}/>}/>
                        <Route exact path="/todo" component={() => <TodoList items={this.state.todo}/>}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
