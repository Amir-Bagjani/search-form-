
const Table = ({users}) => {
  return (
    <table>
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>E-mail</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                </tr>
            ))}
        </tbody>
        
    </table>
  )
}

export default Table