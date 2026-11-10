import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext(null)

function hasDiscount(produto) {
  return Number(produto?.desconto) > 0
}

function getDiscountPrice(produto) {
  const price = Number(produto?.preco) || 0
  const discount = Number(produto?.desconto) || 0

  if (!hasDiscount(produto)) return price

  return price - (price * discount) / 100
}

export function CartProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false)

  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cartItems")
      return storedCart ? JSON.parse(storedCart) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  function openCart() {
    setCartOpen(true)
  }

  function closeCart() {
    setCartOpen(false)
  }

  function addToCart(produto) {
    const isNew = !cartItems.some((item) => item.id === produto.id)

    setCartItems((items) => {
      const itemExists = items.find((item) => item.id === produto.id)

      if (itemExists) {
        return items.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      }

      return [...items, { ...produto, quantidade: 1 }]
    })

    return isNew
  }

  function removeFromCart(produtoId) {
    setCartItems((items) => items.filter((item) => item.id !== produtoId))
  }

  function increaseQuantity(produtoId) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === produtoId
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    )
  }

  function decreaseQuantity(produtoId) {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === produtoId
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter((item) => item.quantidade > 0)
    )
  }

  function clearCart() {
    setCartItems([])
  }

  const cartCount = cartItems.reduce((sum, item) => {
    return sum + item.quantidade
  }, 0)

  const cartSubtotal = cartItems.reduce((sum, item) => {
    return sum + item.preco * item.quantidade
  }, 0)

  const cartDiscount = cartItems.reduce((sum, item) => {
    return sum + (item.preco - getDiscountPrice(item)) * item.quantidade
  }, 0)

  const cartTotal = cartSubtotal - cartDiscount

  return (
    <CartContext.Provider
      value={{
        cartOpen,
        cartItems,
        cartCount,
        cartSubtotal,
        cartDiscount,
        cartTotal,
        hasDiscount,
        getDiscountPrice,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        setCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
