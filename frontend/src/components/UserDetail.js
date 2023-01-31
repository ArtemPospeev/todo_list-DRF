import React from "react";
import {useParams} from "react-router-dom";
import {UserItem, USER_COLUMN_NAMES} from "./Users";
import _ from "lodash";


export const UserDetail = ({users, projects}) => {
    let {id} = useParams();
    let user = users.filter(user => String(user.id) === id);
    console.log()
    return (!_.isEmpty(user) ?
            <table className='body'>
                <thead>
                <tr>
                    {USER_COLUMN_NAMES.map(item => <th>{item}</th>)}
                </tr>
                </thead>
                <tbody>
                {user.map((user) => <UserItem user={user} projects={projects}/>)}
                </tbody>
            </table> :

            <h4>Ooops, such user not found!</h4>
    )

}