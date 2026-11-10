import "./cartBanner.css"

export function CartBanner() {
  return (
    <section className="cart-banner d-flex align-items-center justify-content-center">
      <div className="text-center">

        <h1 className="cart-banner-title mb-1">
          Carrinho
        </h1>

        <div className="cart-banner-breadcrumb d-flex justify-content-center gap-2">
          <span>Home</span>
          <span>&gt;</span>
          <span>Carrinho</span>
        </div>
      </div>
    </section>
  )
}