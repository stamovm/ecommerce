import data from './data.js'

function App() {
  //50:16

  return (
    <div>
      <header className="App-header">
        <a href="/">ICommerce</a>
      </header>
      <main>
        <h2>List of products</h2>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>${product.price}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
