import CartWidget from "./CartWidget/CartWidget";



const NavBar= ()=> {

return (
  <>
<div>
            <h1 className="title">Bienvenidos a TAKE IT </h1> 
            <section className="hero is-success">
                <div className="hero-body">
                <h1 className="title">Bienvenidos a TAKE IT </h1> 
                </div>
            </section>
        </div>
         <nav class="navbar" role="navigation" aria-label="main navigation">
         <div class="navbar-brand">
            <button>Centrales Electronicas</button>
            <button>Receptores</button>
            <button>Controles</button>

          </div>
          <CartWidget/>
         </nav>
  </>
  
        )

}

export default NavBar;