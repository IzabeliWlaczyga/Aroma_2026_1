import { useState } from "react"
import './banner.css'

export function Banner(){

    const banners = [
        {
            id: 1,
            titulo: "Sabor que desperta momentos!",
            texto: "Clique e conheça nossos produtos selecionados.",
            img: "/img/xicara-banner.png"
        },
         {
            id: 2,
            titulo: "Cafés em grão",
            texto: "Grãos selecionados para uma experiência de sabor incomparável",
            img: "/img/cafe-em-graos-banner.png"
        },
        {
            id: 3,
            titulo: "Cafés moídos",
            texto: "Seleção especial para todos os momentos.",
            img: "/img/cafe-torrado-banne.png"
        },
        {
            id: 4,
            titulo: "Capsulas",
            texto: "Praticidade, qualidade e aroma excepcionais",
            img: "/img/capsulas-banner.png"
        },
        {
            id: 5,
            titulo: "Acessórios",
            texto: "Tudo o que você precisa para uma experiência completa.",
            img: "/img/cafeteira-banner.png"
        }
    ]

    const [bannerId, setBannerId] = useState(1);

    const bannerAtual = banners.find(
    (item) => item.id === bannerId
  );


    return(
        <section className="banner">
            <div className="container-fluid">
                <div className="row align-items-center g-4">
                    <div className="col-12 col-lg-7">
                        <div className="banner-content d-flex align-items-center">
                            <img src={bannerAtual.img} alt={bannerAtual.titulo} />
                            <div className="banner-text">
                                <h2>{bannerAtual.titulo}</h2>
                                <p>{bannerAtual.texto}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-5">
                        <div className="banner-btn row g-3">
                            {banners.slice(1).map((banner)=>(
                                <div className="col-12 col-sm-6" key={banner.id}>
                                    <button
                                        type="button"
                                        className={`banner-card w-100 ${
                                            banner.id === bannerId ? "card-active" : ""
                                        }`}
                                        onClick={()=>setBannerId(banner.id)}
                                    >
                                        <span>{banner.titulo}</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
    )
}
