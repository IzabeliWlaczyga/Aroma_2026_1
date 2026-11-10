import { Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { ProductCard } from "../components/productCard"
import { useProduct } from "../hooks/useProduct"

function createSlug(value) {
  return value
    .replace(/Ã©/g, "e")
    .replace(/Ã£/g, "a")
    .replace(/Ã¡/g, "a")
    .replace(/Ã­/g, "i")
    .replace(/Ã³/g, "o")
    .replace(/Ã§/g, "c")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
}

export function ProductsByCategory() {
  const { categoria } = useParams()
  const products = useProduct()

  const filteredProducts = products.filter((produto) => {
    return createSlug(produto.categoria) === categoria
  })

  const categoryTitle = filteredProducts[0]?.categoria || "Categoria"

  return (
    <div className="container mb-3 mt-3">
      <h3 className="row">{categoryTitle}</h3>

      {filteredProducts.length === 0 ? (
        <Text>Nenhum produto encontrado nesta categoria.</Text>
      ) : (
        <div className="row g-4 mt-1">
          {filteredProducts.map((produto) => (
            <div
              key={produto.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
            >
              <ProductCard produto={produto} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
