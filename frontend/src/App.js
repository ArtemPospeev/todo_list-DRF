import './App.css';
import React from 'react';
import axios from "axios";
import {UserList} from "./components/Users";
import {ProjectList} from "./components/Projects";
import {TaskList} from "./components/Tasks";
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import {ProjectDetail} from "./components/ProjectDetail";
import {UserDetail} from "./components/UserDetail";
import {TaskDetail} from "./components/TaskDetail";
import {LoginForm} from "./components/Auth";
import Cookies from "universal-cookie";
import {Breadcrumb, BreadcrumbItem} from "@chakra-ui/react";

const NotFound404 = ({location}) => {
    return (
        <div>
            <h1>Страница по адресу '{location.pathname}' не найдена</h1>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'tasks': [],
            'projects': [],
            'token': '',
        };
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.load_data())
    }

    set_username(username) {
        const cookies = new Cookies()
        cookies.set('username', username)
    }

    is_authenticated() {
        return this.state.token !== ''
    }

    logout() {
        this.set_token('')
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    get_token(username, password) {
        axios.post(
            'http://127.0.0.1:8000/api-auth-token/',
            {username: username, password: password}
        ).then(response => {
            this.set_token(response.data['token'])
            this.set_username(username)
        }).catch(error => alert('Wrong login or password'))
    }

    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_authenticated()) {
            headers['Authorization'] = 'Token ' + this.state.token
        }
        return headers
    }

    _send_axios_get_request(url, state_param) {
        const headers = this.get_headers()
        axios.get(url, {headers})
            .then(response => {
                const object = response.data.results
                this.setState(
                    {
                        [state_param]: object
                    }
                )
            }).catch(error => console.log(error))
    }

    load_data() {
        this._send_axios_get_request('http://127.0.0.1:8000/users/', 'users')
        this._send_axios_get_request('http://127.0.0.1:8000/TODO', 'tasks')
        this._send_axios_get_request('http://127.0.0.1:8000/projects', 'projects')
    }

    componentDidMount() {
        this.get_token_from_storage()
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/">Users</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to="/projects">Projects</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to="/tasks">Tasks</Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            {this.is_authenticated() ?
                                <button onClick={() => this.logout()}>Logout</button> :
                                <Link to='/login'>Login</Link>}
                        </BreadcrumbItem>

                    </Breadcrumb>

                    <Switch>
                        {/*user routes*/}
                        <Route exact path="/"
                               component={() => <UserList users={this.state.users}
                                                          projects={this.state.projects}/>}/>
                        <Route exact path="/users/:id"
                               component={() => <UserDetail users={this.state.users} projects={this.state.projects}/>}/>
                        {/*project routes*/}
                        <Route exact path="/projects"
                               component={() => <ProjectList users={this.state.users} items={this.state.projects}
                                                             tasks={this.state.tasks}/>}/>
                        <Route exact path="/projects/:id"
                               component={() => <ProjectDetail users={this.state.users} items={this.state.projects}
                                                               tasks={this.state.tasks}/>}/>
                        {/*task routes*/}
                        <Route exact path="/tasks"
                               component={() => <TaskList users={this.state.users} projects={this.state.projects}
                                                          items={this.state.tasks}/>}/>
                        <Route exact path="/tasks/:id"
                               component={() => <TaskDetail users={this.state.users} projects={this.state.projects}
                                                            items={this.state.tasks}/>}/>
                        {/*other*/}
                        <Route exact path='/login' component={() => <LoginForm
                            get_token={(username, password) => this.get_token(username, password)}/>}/>

                        <Redirect from="/users" to="/"/>
                        <Route component={NotFound404}/>
                    </Switch>

                </div>
            </BrowserRouter>
        )
    }
}


export default App;
