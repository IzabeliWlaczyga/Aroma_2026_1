import { Header } from "./components/header"
import { CartDrawer } from "./components/cartDrawer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Product } from "./pages/Product";
import { ProductsByCategory } from "./pages/ProductsByCategory";
import { Login } from "./pages/Login";
import { Footer } from "./components/footer"


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/produto/:id" element={<Product />} />
          <Route path="/categoria/:categoria" element={<ProductsByCategory />} />
        </Routes>
        <CartDrawer />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
