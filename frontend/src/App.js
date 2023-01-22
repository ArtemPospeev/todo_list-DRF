import './App.css';
import React from 'react';
import axios from "axios";
import UserList from "./components/Users";
import ProjectList from "./components/Projects";
import {TaskList} from "./components/Tasks";
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";
import UserDetail from "./components/UserDetail";
import TaskDetail from "./components/TaskDetail";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'tasks': [],
            'projects': [],
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
                const tasks = response.data.results
                this.setState(
                    {
                        'tasks': tasks
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


    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <nav className="menu">
                        <ul>
                            <li>
                                <Link to="/">Users</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/tasks">Tasks</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/"
                               component={() => <UserList users={this.state.users} projects={this.state.projects}/>}/>
                        <Route exact path="/users/:id"
                               component={() => <UserDetail users={this.state.users} projects={this.state.projects}/>}/>
                        <Route exact path="/projects"
                               component={() => <ProjectList items={this.state.projects} tasks={this.state.tasks}/>}/>
                        <Route exact path="/projects/:id"
                               component={() => <ProjectDetail items={this.state.projects} tasks={this.state.tasks}/>}/>
                        <Route exact path="/tasks" component={() => <TaskList items={this.state.tasks}/>}/>
                        <Route exact path="/tasks/:id" component={() => <TaskDetail items={this.state.tasks}/>}/>
                        <Redirect from="/users" to="/"/>
                    </Switch>

                </div>
            </BrowserRouter>
        )
    }
}


export default App;
