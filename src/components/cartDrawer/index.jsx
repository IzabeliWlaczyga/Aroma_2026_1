import { Button, Drawer, Portal, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useCart } from "../../contexts/CartContext"
import { faMinus, faPlus, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function CartDrawer() {
  const {
    cartOpen,
    cartItems,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    getDiscountPrice,
    hasDiscount,
    setCartOpen,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart()

  function formataValor(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  return (
    <Drawer.Root
      open={cartOpen}
      onOpenChange={(details) => setCartOpen(details.open)}
      placement="end"
    >
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Carrinho</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>
              {cartItems.length === 0 ? (
                <Text>Seu carrinho esta vazio.</Text>
              ) : (
                cartItems.map((item) => {
                  const discounted = hasDiscount(item)
                  const discountPrice = getDiscountPrice(item)

                  return (
                    <div key={item.id}>
                      <strong>{item.nome}</strong>

                      {discounted ? (
                        <div className="d-flex align-items-center gap-2">
                          <Text color="gray.400" textDecoration="line-through" mb="0">
                            {formataValor(item.preco)}
                          </Text>
                          <Text mb="0">{formataValor(discountPrice)}</Text>
                        </div>
                      ) : (
                        <p>{formataValor(item.preco)}</p>
                      )}

                      <div className="d-flex align-items-center gap-2 my-2">
                        <Button
                          size="xs"
                          variant="outline"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </Button>

                        <Text mb="0">{item.quantidade}</Text>

                        <Button
                          size="xs"
                          variant="outline"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </Button>
                      </div>

                      <FontAwesomeIcon icon={faTrash} onClick={() => removeFromCart(item.id)} />
                    </div>
                  )
                })
              )}
            </Drawer.Body>

            <Drawer.Footer>
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <Text mb="1">Subtotal:</Text>
                  <Text mb="1">{formataValor(cartSubtotal)}</Text>
                </div>

                <div className="d-flex justify-content-between">
                  <Text mb="1">Desconto:</Text>
                  <Text mb="1">{formataValor(cartDiscount)}</Text>
                </div>

                <div className="d-flex justify-content-between">
                  <Text fontWeight="bold">Total:</Text>
                  <Text fontWeight="bold">{formataValor(cartTotal)}</Text>
                </div>
              </div>

              <Button
                as={Link}
                to="/carrinho"
                colorPalette="green"
                textStyle="sm"
                onClick={() => setCartOpen(false)}
                textDecoration="none"
                color="#fff"
              >
                Finalizar compra
              </Button>

              <Drawer.CloseTrigger asChild>
                <FontAwesomeIcon icon={faXmark} />
              </Drawer.CloseTrigger>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
