import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.jsx'
import ProductScreen from './screens/ProductScreen.jsx'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import { useContext } from 'react'
import { Store } from './store.jsx'

function App() {
  const { state } = useContext(Store)
  const { cart } = state

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Button
              variant="dark"
              // onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
            >
              btn
              <i className="fas fa-bars"></i>
            </Button>
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Home</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto w-100  justify-content-end">
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.length}
                  </Badge>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main className="mt-3">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
