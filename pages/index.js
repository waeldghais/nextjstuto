import Link from "next/link"
import { useRouter } from 'next/router'
function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/product')
  }
  return <>
    <h1>Home Page</h1>
    <Link href='/posts'>
      <a >Posts</a>
    </Link>
    <Link href='/product'>
      <a >Products</a>
    </Link>
    <Link href='/users'>
    </Link>
    <button onClick={handleClick}>
      Place Oeder
    </button>
  </>
}
export default Home

