function Header() {
    return(
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logotpe"/>
          <div className="ml-15">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин найкращих кросівок</p>
          </div> 
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="Cart"/>           
            <span>1205 грн.</span>
          </li>
          <li className="mr-10">
            <img width={18} height={18} src="/img/user.svg" alt="User"/>
          </li>
        </ul>
      </header>
    );
}

export default Header;