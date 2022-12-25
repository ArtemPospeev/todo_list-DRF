import React from "react";

const UserItem = ({user}) => {
    return (
        <tr>
            <td>user.username</td>
            <td>user.first_name</td>
            <td>user.last_name</td>
            <td>user.email</td>
            <td>user.birthday_date</td>
        </tr>
    )
}

const UserList = ({users}) => {
    return(
        <table>
            <th>
                username
            </th>
            <th>
                first name
            </th>
            <th>
                last name
            </th>
            <th>
                email
            </th>
            <th>
                birthday date
            </th>
            {users.map((user) => <UserItem user={user} />)}
        </table>
    )
}

export default UserList