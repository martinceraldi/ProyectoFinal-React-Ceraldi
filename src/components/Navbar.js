import CartWidget from "./CartWidget/CartWidget";



const NavBar= ()=> {

return (
         <nav class="navbar" role="navigation" aria-label="main navigation">
         <div class="navbar-brand">
            <button>Centrales Electronicas</button>
            <button>Receptores</button>
            <button>Controles</button>

          </div>
          <CartWidget/>
         </nav>
        )

}

export default NavBar;