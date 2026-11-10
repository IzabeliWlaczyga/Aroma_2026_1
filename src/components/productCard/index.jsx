import { Button, Card, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useCart } from "../../contexts/CartContext"
import "./productCard.css"

export function ProductCard({ produto }) {
  const { addToCart, getDiscountPrice, hasDiscount } = useCart()

  const {
    nome,
    preco,
    imagemPrincipal,
    descricao
  } = produto;

  function handleAdd() {
    addToCart(produto)
  }

  function formataValor(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  const discountPrice = getDiscountPrice(produto)
  const discounted = hasDiscount(produto)

  return (
    <Card.Root width="100%" height="100%" overflow="hidden">
      <Link to={`/produto/${produto.id}`}>
        <Image
          src={imagemPrincipal}
          alt={nome}
          width="100%"
          height="150px"
          objectFit="cover"
        />
      </Link>

      <Card.Body gap="2" flex="1">
        <Card.Title fontSize="lg" lineClamp="1">
          <Link to={`/produto/${produto.id}`} className = "title" >
              {nome}
          </Link>
        </Card.Title>

        <Card.Description lineClamp="1" textStyle="sm" mb="5px">
          {descricao}
        </Card.Description>

        {discounted ? (
          <div className="d-flex align-items-center gap-2">
            <Text
              textDecoration="line-through"
              color="gray.400"
              textStyle="sm"
              mb="0"
            >
              {formataValor(preco)}
            </Text>

            <Text textStyle="lg" fontWeight="medium" mb="0">
              {formataValor(discountPrice)}
            </Text>
          </div>
          ) : (
          <Text textStyle="lg" fontWeight="medium" mt="5px">
            {formataValor(preco)}
          </Text>
        )}
        
      </Card.Body>

      <Card.Footer justifyContent="flex-end" mt="1">
        <Button 
          width="70%" 
          variant="solid" 
          height="40px" 
          textStyle="sm" 
          borderRadius="5px" 
          colorPalette="green"
          onClick={handleAdd}
        >
          Adicionar ao carrinho
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}
