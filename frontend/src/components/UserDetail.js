import React from "react";
import {useParams} from "react-router-dom";
import {UserItem} from "./Users";
import _ from "lodash";


export const UserDetail = ({users, projects}) => {
    let {id} = useParams();
    let user = users.filter(user => String(user.id) === id);
    const columnNames = ['Id', 'Username', 'First name', 'Last name', 'Email', 'Birthday date', 'Projects'];
    console.log()
    return (!_.isEmpty(user) ?
            <table className='body'>
                <thead>
                <tr>
                    {columnNames.map(item => <th>{item}</th>)}
                </tr>
                </thead>
                <tbody>
                {user.map((user) => <UserItem user={user} projects={projects}/>)}
                </tbody>
            </table> :

            <h4>Ooops, such user not found!</h4>
    )

}