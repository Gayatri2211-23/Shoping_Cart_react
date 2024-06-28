import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Menu()
{
const data = useSelector(state=>state.productDetails.value)
return <div className="container text-center">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light fixed-top " style={{fontSize:'20px'}}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <Link className="navbar-brand text-info" to="#" ><b>X-CART</b></Link>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-3">
      <li className="nav-item active px-2">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item px-2">
        <Link className="nav-link" to="/About">About</Link>
      </li>
      <li className="nav-item px-2">
        <Link className="nav-link" to="/Contact">Contact</Link>
      </li>
      
    </ul>
    
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
    <li className="nav-item">
    <form className="form-inline ml-auto my-lg-0 py-3">
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form></li>
    
    <li className="nav-item"  style={{fontSize:"25px"}}>
        <Link className="nav-link " to="/cart">&emsp;<i class="bi bi-cart4" ></i> : {data.length}</Link>
    </li>
    </ul>  
  </div>
    </nav>
    

</div>
}
export default Menu;