import { Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { ProductDetails } from "../components/productDetails"
import { useProduct } from "../hooks/useProduct"

export function Product() {
  const { id } = useParams()
  const products = useProduct()

  const produto = products.find((item) => String(item.id) === id)

  if (!produto) {
    return (
      <div className="container my-4">
        <Text>Produto nao encontrado.</Text>
      </div>
    )
  }

  return (
    <div className="container my-4">
      <ProductDetails produto={produto} />
    </div>
  )
}
