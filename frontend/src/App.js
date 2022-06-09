import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.jsx'
import ProductScreen from './screens/ProductScreen.jsx'
function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="App-header">
          <Link to="/">ICommerce</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
