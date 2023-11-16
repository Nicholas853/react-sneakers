import { Link } from 'react-router-dom';

function Header(props) {
    return(
        <header className="d-flex justify-between align-center p-40">
        <Link to="/">
          <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.png" alt="Logotpe"/>
            <div className="ml-15">
              <h3 className="text-uppercase">React Sneakers</h3>
              <p className="opacity-5">Магазин найкращих кросівок</p>
            </div> 
          </div>
        </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p d-flex align-center">
            <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="Cart"/>           
            <span>1205 грн.</span>
          </li>
          <li className="mr-30 cu-p">
            <Link to="/favorites" className="d-flex align-center">
              <img className="mr-10" width={18} height={18} src="/img/heart.svg" alt="Heart"/>           
              <span className="favorite">Уподобане</span>
            </Link>
          </li>
          <li className="mr-10">
            <img width={18} height={18} src="/img/user.svg" alt="User"/>
          </li>
        </ul>
      </header>
    );
}

export default Header;