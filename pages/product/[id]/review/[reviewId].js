import  {useRouter} from 'next/router'
function Review() {
    const router = useRouter();
    const {id,reviewId} = router.query
    return <h1>Review {reviewId} for product {id} </h1>
  }
  export default Review