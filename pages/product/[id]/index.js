import  {useRouter} from 'next/router'
function ProductDetails() {
    const router = useRouter();
    const productId = router.query.id
    return <h1>Details about product {productId}</h1>
  }
  export default ProductDetails