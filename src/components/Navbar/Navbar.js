import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

	const navigate = useNavigate()

	return (
		<nav className="NavBar" >
			<h3 onClick={() => navigate('/')}>Audio<span>Mania</span></h3>
			<div className="Categories">
				<NavLink to={`/category/Vinilos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Vinilos</NavLink>
				<NavLink to={`/category/Tornamesas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tornamesas</NavLink>
				<NavLink to={`/category/Monitores Estudio`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Monitores Estudio</NavLink>
			</div>
			<CartWidget />
		</nav>
	)
}
export default NavBar


