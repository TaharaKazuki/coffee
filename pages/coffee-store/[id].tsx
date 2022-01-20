import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

const CoffeeStore: NextPage = () => {
  const router = useRouter()
  console.info(router.query.id)
  return (
    <div>
      Coffee
      <Link href="/">
        <a>Go back to home</a>
      </Link>
    </div>
  )
}

export default CoffeeStore
