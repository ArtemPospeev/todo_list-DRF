import React from "react";
import {useParams} from "react-router-dom";
import {UserItem} from "./Users"


const UserDetail = ({users, projects}) => {
    let {id} = useParams()
    let user = users.filter(user => String(user.id) === id)
    const columnNames = ['Id', 'Username', 'First name', 'Last name', 'Email', 'Birthday date', 'Projects']
    if (user) {
        return (
            <table className='body'>
                <thead>
                <tr>
                    {columnNames.map(item => <th>{item}</th>)}
                </tr>
                </thead>
                <tbody>
                {user.map((user) => <UserItem user={user} projects={projects}/>)}
                </tbody>
            </table>
        )
    } else {
        return (
            <h4>Ooops, such user not found!</h4>
        )
    }
}

export default UserDetail
