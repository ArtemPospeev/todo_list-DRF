import React from "react";

const TodoItem = ({item}) => {
    return (
        <tr>
            <td>{item.number}</td>
            <td>{item.body}</td>
            <td>{item.creator}</td>
            <td>{item.project}</td>
            <td>{item.createdAt}</td>
            <td>{item.isActive}</td>
        </tr>
    )
}

const TodoList = ({items}) => {
    return (
        <table className='body'>
            <th>
                Number
            </th>
            <th>
                Name
            </th>
            <th>
                Users
            </th>
            <th>
                Repository link
            </th>
            <th>
                Is active
            </th>
            {items.map((item) => <TodoItem item={item}/>)}
        </table>
    )
}

export default TodoList
