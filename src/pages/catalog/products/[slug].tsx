import {useRouter} from 'next/router'

const Product: React.FC = () => {

  const router = useRouter()

  return (
    <div>
      <h1>{router.query.slug}</h1>
    </div>
  )
}

export default Product;