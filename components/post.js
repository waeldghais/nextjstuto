
function Post_Id({ post }) {
    return (
        <>
        <h2> {post.id}</h2>
            <h2> {post.title}</h2>
            <p>{post.body}</p>

        </>
    )
}
export default Post_Id