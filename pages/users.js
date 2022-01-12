import User from "../components/user"

function UserList({ users }) {
    return <>
        <h1> List Of Users</h1>
        <table>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>City</td>
            </tr>
            {

                users.map(user => {
                    return (
                        <div key={user.id}>
                            <tr>
                                <User user={user} />
                            </tr>
                        </div>
                    )
                })
            }
        </table>
    </>
}
export default UserList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    //console.log(data);
    return {
        props: {
            users: data
        }
    }
}