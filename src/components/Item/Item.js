import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, title, img, price, stock}) => {


    
    return (
        
        <article className="CardItem" >
            <header className="Header">
                <h2 className="ItemHeader"> 
                {title}
                </h2>
            </header>
            <picture>
                <img src={`./images/${Item.image}`} alt={Item.title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">Disponible:{stock}</p>
            </section>
            <section>
                <p className="Info">Precio: ${price}</p>
            </section>           
            <footer className='ItemFooter'><Link to={`/detail/${id}`} className='Option'>Ver detalle</Link></footer>
        </article>
    )
    
}

export default Item