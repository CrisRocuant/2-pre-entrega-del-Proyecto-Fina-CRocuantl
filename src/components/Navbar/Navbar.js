import { NavLink, Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const NavBar = () => {

	const navigate = useNavigate()
	const { totalQuantity } = useContext(CartContext)

	return (
		<nav className="NavBar" >
			<h3 onClick={() => navigate('/')}>All<span>Sports</span></h3>
			<div className="Categories">
				<NavLink to={`/category/camiseta`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Camisetas</NavLink>
				<NavLink to={`/category/botin`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Botines</NavLink>
				<NavLink to={`/category/zapatilla`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Zapatillas</NavLink>
			</div>
			<Link  to='/cart'><CartWidget totalQuantity={totalQuantity} /></Link>
		</nav>
	)
}
export default NavBar


