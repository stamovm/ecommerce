import { useParams } from 'react-router-dom'

function ProductScreen() {
  const parms = useParams()
  const { slug } = parms

  return (
    <div>
      <h1>{slug}</h1>
      <p>product description</p>
      {/* <p>${product.price}</p> */}
      <button>Buy now</button>
    </div>
  )
}
export default ProductScreen
