import {useRouter} from 'next/router'
import Post_Id from '../../components/post'
function Post({post}) {
    const router = useRouter()
    if (router.isFallback) {
        return <h3>Loading...</h3>
    }
        return (
            <>
            <Post_Id post={post}/>
          
            
        </>
        )    
}
export default Post



export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    const paths = data.map(post => {
        return {
            params: {
                postId:`${post.id}`,
                
            }
        }
    })
  //console.log(context);
  //console.log("ezzzzzzzzzz");
    return {
        // paths:[
        //     {
        //         params : {postId : '1'},
        //     },
        //     {
        //         params : {postId : '2'},
        //     },
        //     {
        //         params : {postId : '3'},
        //     }
        // ] ,
        paths,
        fallback : true,
    }
  
    
  }


export async function getStaticProps(context) {
    const {params} = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    //console.log(context);
    //console.log(params.postId);
    
    return {
        props: {
            post : data
        }
    }
  }