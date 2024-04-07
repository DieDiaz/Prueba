import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div>
            <h1>Creacion de Examenes</h1>
            <ul>
                <li>
                    <Link to="/">HOME</Link> 
                </li>
                <li>
                    <Link to="/new">nuevo examen</Link> 
                </li>
            </ul>
        </div>
    );
}

export default Navbar;