import { Button, Card, Image, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useCart } from "../contexts/CartContext"
import { CartBanner } from "../components/cartBanner"

export function Cart() {
  const {
    cartItems,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    getDiscountPrice,
    hasDiscount,
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
    <>
    <CartBanner />

    <div className="container my-4">
      <h3 className="mb-4">Carrinho</h3>

      {cartItems.length === 0 ? (
        <Card.Root>
          <Card.Body>
            <Text mb="3">Seu carrinho esta vazio.</Text>
            <Button as={Link} to="/" colorPalette="green" textDecoration="none" color="#fff" width="50%">
              Continuar comprando
            </Button>
          </Card.Body>
        </Card.Root>
      ) : (
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="d-flex flex-column gap-3">
              {cartItems.map((item) => {
                const discounted = hasDiscount(item)
                const discountPrice = getDiscountPrice(item)

                return (
                  <Card.Root key={item.id}>
                    <Card.Body>
                      <div className="d-flex gap-3 align-items-center">
                        <Image
                          src={item.imagemPrincipal}
                          alt={item.nome}
                          width="96px"
                          height="96px"
                          objectFit="cover"
                          borderRadius="5px"
                        />

                        <div className="flex-grow-1">
                          <Text fontWeight="bold">{item.nome}</Text>

                          {discounted ? (
                            <div className="d-flex align-items-center gap-2">
                              <Text textStyle="sm" color="gray.400" textDecoration="line-through" mb="0">
                                {formataValor(item.preco)}
                              </Text>
                              <Text textStyle="sm" mb="0">
                                {formataValor(discountPrice)}
                              </Text>
                            </div>
                          ) : (
                            <Text textStyle="sm">
                              {formataValor(item.preco)}
                            </Text>
                          )}

                          <div className="d-flex align-items-center gap-2 my-2">
                            <Button
                              size="xs"
                              variant="outline"
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </Button>

                            <Text mb="0" textStyle="sm" color="gray.600">
                              {item.quantidade}
                            </Text>

                            <Button
                              size="xs"
                              variant="outline"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </Button>
                          </div>
                        </div>

                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </div>
                    </Card.Body>
                  </Card.Root>
                )
              })}
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <Card.Root>
              <Card.Body gap="3">
                <Card.Title>Resumo do pedido</Card.Title>

                <div className="d-flex justify-content-between">
                  <Text>Subtotal</Text>
                  <Text>{formataValor(cartSubtotal)}</Text>
                </div>

                <div className="d-flex justify-content-between">
                  <Text>Descontos</Text>
                  <Text>{formataValor(cartDiscount)}</Text>
                </div>

                <hr />

                <div className="d-flex justify-content-between">
                  <Text fontWeight="bold">Total</Text>
                  <Text fontWeight="bold">{formataValor(cartTotal)}</Text>
                </div>
              </Card.Body>
            </Card.Root>
          </div>
        </div>
      )}
    </div>

    </>
  )
}
