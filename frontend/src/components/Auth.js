import React from "react";
import {Box, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {Redirect} from "react-router-dom";

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
        if (this.props.isAuth()) {
            return <Redirect to='/'/>
        }
        return (
            <Box justifyContent='center' sx={{maxWidth: '30%', margin: '0 auto'}}>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <FormControl>
                        <FormLabel sx={{textAlign: "center"}}>Login</FormLabel>
                        <Input sx={{marginBottom: "5px", border: "1px solid teal", textAlign: "center"}} type="text"
                               value={this.state.login} name="login"
                               placeholder="login"
                               onChange={(event) => this.handleChange(event)}/>
                        <FormLabel sx={{textAlign: "center"}}>Password</FormLabel>
                        <Input sx={{marginBottom: "10px", border: "1px solid teal", textAlign: "center"}}
                               type="password" value={this.state.password} name="password" placeholder="password"
                               onChange={(event) => this.handleChange(event)}/>
                        <Input sx={{border: "1px solid teal", backgroundColor:"teal"}} type="submit" value="login"/>
                    </FormControl>
                </form>
            </Box>

        )
    }
}
