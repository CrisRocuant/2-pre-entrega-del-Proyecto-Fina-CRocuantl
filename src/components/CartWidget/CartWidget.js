import './CartWidget.css'


const CartWidget = () => {
    return (
        <div className='menu_carrito'>
            <img  className='CartImg' src='../images/cart.svg' alt='cart-widget' />
            <text>0</text>
        </div>
    )
}

export default CartWidget