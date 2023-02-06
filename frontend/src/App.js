import './App.css';
import React from 'react';
import axios from "axios";
import {UserList} from "./components/users/Users";
import {ProjectList} from "./components/projects/Projects";
import {TaskList} from "./components/tasks/Tasks";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {ProjectDetail} from "./components/projects/ProjectDetail";
import {UserDetail} from "./components/users/UserDetail";
import {TaskDetail} from "./components/tasks/TaskDetail";
import {LoginForm} from "./components/Auth";
import Cookies from "universal-cookie";
import {Header} from "./components/Header";
import {Box, Container, Grid, GridItem} from "@chakra-ui/react";
import {Footer} from "./components/Footer";

const NotFound404 = ({location}) => {
    return (
        <div>
            <h1>Страница по адресу '{location.pathname}' не найдена</h1>
        </div>
    )
}

export const ROW_PER_PAGE_USERS = 20
export const ROW_PER_PAGE_PROJECTS = 20
export const ROW_PER_PAGE_TASKS = 15

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'tasks': [],
            'projects': [],
            'token': '',
            'username': ''
        };
    }

    setToken(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.loadData())
    }

    setUsername(username) {
        const cookies = new Cookies()
        cookies.set('username', username)
        this.setState({'username': username})
    }

    getUsername() {
        return this.state.username
    }


    isAuthenticated() {
        return this.state.token !== ''
    }

    logout() {
        this.setToken('')
        this.setUsername('')
    }

    getTokenFromStorage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.loadData())
    }

    getToken(username, password) {
        axios.post(
            'http://127.0.0.1:8000/api-auth-token/',
            {username: username, password: password}
        ).then(response => {
            this.setToken(response.data['token'])
            this.setUsername(username)
        }).catch(error => alert('Wrong login or password'))
    }

    getHeaders() {
        let headers = {
            'Content-Type': 'application/json',
        }
        if (this.isAuthenticated()) {
            headers['Authorization'] = 'Token' + this.state.token
        }
        return headers
    }

    _sendAxiosGetRequest(url, state_param) {
        const headers = this.getHeaders()
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


    loadData() {
        this._sendAxiosGetRequest('http://127.0.0.1:8000/users/', 'users')
        this._sendAxiosGetRequest('http://127.0.0.1:8000/TODO/', 'tasks')
        this._sendAxiosGetRequest('http://127.0.0.1:8000/projects/', 'projects')
    }

    componentDidMount() {
        this.getTokenFromStorage()
    }

    render() {
        return (
            <BrowserRouter>
                <Grid sx={{display: "flex", flexDirection: "column", minHeight: "97vh"}}>
                    <GridItem>
                        <Header isAuthenticated={() => this.isAuthenticated()} getUsername={() => this.getUsername()}
                                logout={() => this.logout()}/>
                    </GridItem>
                    <GridItem>
                        <Container maxW="56em" sx={{paddingBottom: "100", marginTop: "10"}}>
                            <Box>
                                <Switch>
                                    {/*user routes*/}
                                    <Route exact path="/"
                                           component={() => <UserList users={this.state.users}
                                           />}/>
                                    <Route exact path="/users/:id"
                                           component={() => <UserDetail users={this.state.users}
                                                                        projects={this.state.projects}/>}/>
                                    {/*project routes*/}
                                    <Route exact path="/projects"
                                           component={() => <ProjectList users={this.state.users}
                                                                         items={this.state.projects}
                                                                         tasks={this.state.tasks}/>}/>
                                    <Route exact path="/projects/:id"
                                           component={() => <ProjectDetail users={this.state.users}
                                                                           items={this.state.projects}
                                                                           tasks={this.state.tasks}/>}/>
                                    {/*task routes*/}
                                    <Route exact path="/tasks"
                                           component={() => <TaskList users={this.state.users}
                                                                      projects={this.state.projects}
                                                                      items={this.state.tasks}/>}/>
                                    <Route exact path="/tasks/:id"
                                           component={() => <TaskDetail users={this.state.users}
                                                                        projects={this.state.projects}
                                                                        items={this.state.tasks}/>}/>
                                    {/*other*/}
                                    <Route exact path='/login' component={() => <LoginForm
                                        get_token={(username, password) => this.getToken(username, password)}
                                        isAuth={() => this.isAuthenticated()}/>}/>

                                    <Redirect from="/users" to="/"/>
                                    <Route component={NotFound404}/>
                                </Switch>
                            </Box>

                        </Container>
                    </GridItem>
                    <GridItem
                        sx={{position: "absolute", height: "30px", bottom: "0", left: "0", right: "0"}}>
                        <Footer/>
                    </GridItem>
                </Grid>
            </BrowserRouter>
        )
    }
}


export default App;
