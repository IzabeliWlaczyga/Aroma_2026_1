import { Link } from "react-router-dom";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { ProductCard } from "../components/productCard";
import { useProduct } from "../hooks/useProduct";
import 'bootstrap/dist/css/bootstrap.min.css'
import { ExploreBanner } from "../components/exploreBanner";


export function Home(){

    const products = useProduct();

    const discountedProducts = products
        .filter((produto) => produto.desconto > 0)
        .slice(0, 8);

    return(
        <>
            <Banner />
            <div className="container mb-4 mt-3">
                <h3 className="row">Seleção de descontos!</h3>
                <div className="row g-4 mt-1">
                    {discountedProducts.map((p) => (
                        <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
                            <ProductCard produto={p} />
                        </div>
                    ))}
                </div>
            </div>
            <ExploreBanner />
        </>
    )
}