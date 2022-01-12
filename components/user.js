function User({user}) {
    return (
        <>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.address.city}</td>
        </>
    )
}
export default User