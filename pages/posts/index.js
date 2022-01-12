
import Link from 'next/link'
import Posts from "../../components/posts"
function PostsList({ posts }) {
  return <>
    <h1>Posts List</h1>
    {
      posts.map(post => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <a><Posts post={post} /></a>
            </Link>
            <hr />
          </div>
        )
      })
    }
  </>

}
export default PostsList

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  //console.log(context);
  //console.log(data);
  return {
    props: {
      posts: data
    }
  }
}

// const response = await fetch('https://arvea-test.ovh/apis/levels',{headers: {
//     'Accept': 'application/json',
//     'Authorization': 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU3YTY4ZGQ1ZDE2MjFkMTJlZGUyYzNhZjFmYzI5MjA5ZDBjZmNmOWE4MDY3ZTliZjcwZTE2ZjVlN2ZkYWNmZDA0NWQ2MGRjYTY0M2IzYWQzIn0.eyJhdWQiOiIxIiwianRpIjoiZTdhNjhkZDVkMTYyMWQxMmVkZTJjM2FmMWZjMjkyMDlkMGNmY2Y5YTgwNjdlOWJmNzBlMTZmNWU3ZmRhY2ZkMDQ1ZDYwZGNhNjQzYjNhZDMiLCJpYXQiOjE2NDE5MDkxNzAsIm5iZiI6MTY0MTkwOTE3MCwiZXhwIjoxNjczNDQ1MTY5LCJzdWIiOiIzNyIsInNjb3BlcyI6W119.FGBdwtTqdTQfBYIegV2PPOzMyymMu6T9ZiHKL7emyTx9gs8mc-wVtIr3KPZx3PRE8QbZX_aZMP1x0mylCK9-5_L8Q8R921WJJ_s84vrjKQgJNF7zycWYXVEG9lpGHWQg0apkxtozF5jLgYMapE24ha4Qi9Yz1IgX6CM68_uUSWj-v_KdJj6Bhxcu5qRMQnrpDuXyrPx1C9Phn7Nzg4tAbkcCHZozRYicxYgtuy319OkbLGUdGcZIpm5ZLHoqxzeKBI_Z2nXN1z_mR71pqyNGMmd4ekfHRvNTeR65_elOdilbZaZ4ZQEMCSKMpsMalmRUgEQG4H0hjcKjMzfQx_0Cat85Y2ddQbgOHm3csy7JESAd4S6Ss9P47SGzbj0WSx0RRtydC4b4Nkeo0RLQ_n6sn967gTPtrQCQ2uXYOrrxiBg3KgA2PVArYLKa-LrA49xKkhdLGwJ_vWHb30awrKx-mcPnFw6Zk_P9hFDMO6aQQcMnyaU01kOIePoPyhVCPd7gxlY-QWRrFFSmgsz7mzFsEhvVKLiOF7SpdgNYwYj3miK79XBUZ4pua5mqiASZtZatNgyZmrFk6_JlhawQlf3ZFAWJ2hHF6K99F0G7Wo2KGWlR50rgMY3Au6_vQycMVzYZ7WJdUrZ2GDmJTwxKxU1ivdijKauyJrfKski65nE2Hw4"
//   }})