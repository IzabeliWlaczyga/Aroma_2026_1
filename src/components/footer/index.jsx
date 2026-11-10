import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row align-items-start gy-4">
          <div className="col-12 col-md-3">
            <div className="footer-logo">
              <img src="/img/logo-clara.png" alt="Aroma" />
              <h2>Aroma</h2>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <h3>Nossos produtos</h3>
            <ul>
              <li>
                <Link to="/categoria/cafes-em-grao">Cafes em grao</Link>
              </li>
              <li>
                <Link to="/categoria/cafes-moidos">Cafes moidos</Link>
              </li>
              <li>
                <Link to="/categoria/cafes-em-capsula">Cafes em capsula</Link>
              </li>
              <li>
                <Link to="/categoria/acessorios">Maquinas e acessorios</Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h3>Fale conosco</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <span>+55 46 90000-0000</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faFacebook} />
                <span>@AromaCafe</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>comercial@aromacafe.com.br</span>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h3>Ajuda</h3>
            <ul>
              <li>Estornos</li>
              <li>Formas de pagamento</li>
              <li>Política de privacidade</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}