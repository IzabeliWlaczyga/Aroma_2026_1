import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export function Header(){
    const { openCart, cartCount } = useCart();

    return(
        <nav className="navbar navbar-expand-lg header fixed-top">
            <div className="container-fluid px-4 px-lg-5">
                <Link className="navbar-brand logo d-flex align-items-center gap-2 me-lg-4" to={"/"}>
                    <img src="/img/logo.png" alt="Aroma-logo" />
                    <h1>Aroma</h1>
                </Link>

                <div className="menu flex-grow-1">
                    <ul className="navbar-nav justify-content-center gap-lg-4">
                        <li className="nav-item">
                            <Link className="nav-link" to="/categoria/cafes-em-grao">Cafes em grao</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categoria/cafes-moidos">Cafes moidos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categoria/cafes-em-capsula">Cafes em capsula</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categoria/acessorios">Acessorios</Link>
                        </li>
                    </ul>
                </div>

                <div className="search ms-lg-4">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>

                <div className="icons ms-3">
                    <Link to="/login" aria-label="Login">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <button className="cart-button" onClick={openCart}>
                        <FontAwesomeIcon icon={faBagShopping} />
                        {cartCount > 0 && <span>{cartCount}</span>}
                    </button>
                </div>
            </div>
        </nav>
    )
}
