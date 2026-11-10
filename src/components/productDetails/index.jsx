import { useState } from "react"
import { Button, Image, Input, Text } from "@chakra-ui/react"
import { useCart } from "../../contexts/CartContext"

export function ProductDetails({ produto }) {
  const { addToCart, getDiscountPrice, hasDiscount } = useCart()
  const [selectedImage, setSelectedImage] = useState(null)
  const [cep, setCep] = useState("")

  const images = [produto.imagemPrincipal, ...(produto.galeria || [])]
  const currentImage = selectedImage || produto.imagemPrincipal

  function handleBuy() {
    addToCart(produto)
  }

  function handleShipping(event) {
    event.preventDefault()
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
    <div className="row g-4">
      <div className="col-12 col-lg-6">
        <Image
          src={currentImage}
          alt={produto.nome}
          width="100%"
          height="420px"
          objectFit="cover"
          borderRadius="6px"
        />

        <div className="d-flex gap-2 mt-3">
          {images.map((image) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(image)}
              style={{
                border:
                  image === currentImage ? "2px solid #06402b" : "1px solid #ddd",
                padding: 0,
                borderRadius: "6px",
                overflow: "hidden",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <Image
                src={image}
                alt={produto.nome}
                width="72px"
                height="72px"
                objectFit="cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="col-12 col-lg-6">
        <Text fontSize="3xl" fontWeight="bold">
          {produto.nome}
        </Text>

        <Text color="gray.600" mt="2">
          {produto.descricao}
        </Text>

        {discounted ? (
          <div className="d-flex align-items-center gap-2 mt-4">
            <Text
              fontSize="lg"
              color="gray.400"
              textDecoration="line-through"
              mb="0"
            >
              {formataValor(produto.preco)}
            </Text>

            <Text fontSize="2xl" fontWeight="bold" mb="0">
              {formataValor(discountPrice)}
            </Text>
          </div>
          ) : (
          <Text fontSize="2xl" fontWeight="bold" mt="4">
            {formataValor(produto.preco)}
          </Text>
        )}

        <form onSubmit={handleShipping} className="mt-4">
          <Text fontWeight="medium" mb="2">
            Calcular frete
          </Text>

          <div className="d-flex gap-2">
            <Input
              value={cep}
              onChange={(event) => setCep(event.target.value)}
              placeholder="Digite seu CEP"
            />

            <Button type="submit" variant="outline">
              Calcular frete
            </Button>
          </div>
        </form>

        <Button
          width="100%"
          height="48px"
          mt="4"
          bg="#06402b"
          onClick={handleBuy}
        >
          Comprar
        </Button>
      </div>
    </div>
  )
}
