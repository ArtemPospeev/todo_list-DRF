import React from "react";

const UserItem = ({user}) => {
    return (
        <tr>
            <td>{user.username}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.birthdayDate}</td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <table className='body'>
            <th>
                Username
            </th>
            <th>
                First name
            </th>
            <th>
                Last name
            </th>
            <th>
                Email
            </th>
            <th>
                Birthday date
            </th>
            {users.map((user) => <UserItem user={user}/>)}
        </table>
    )
}

export default UserList
