import React from "react";
import {Box, FormControl, FormLabel, Input} from "@chakra-ui/react";

export class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {login: '', password: ''}
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }


    handleSubmit(event) {
        this.props.get_token(this.state.login, this.state.password)
        event.preventDefault()
    }

    render() {
        return (
            <Box justifyContent='center'>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <FormControl>
                        <FormLabel>Login</FormLabel>
                        <Input type="text" value={this.state.login} name="login"
                               placeholder="login"
                               onChange={(event) => this.handleChange(event)}/>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" value={this.state.password} name="password" placeholder="password"
                               onChange={(event) => this.handleChange(event)}/>
                        <Input type="submit" value="login"/>
                    </FormControl>
                </form>
            </Box>

        )
    }
}
