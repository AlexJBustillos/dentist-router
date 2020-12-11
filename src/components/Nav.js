import { Link } from 'react-router-dom'

function Nav() {
    return(
        <ul>
            <Link to="/">Home</Link><br/>
            <Link to="/contact">Contact</Link><br/>
            <Link to="/procedures">Procedures</Link>
        </ul>
    )
}

export default Nav