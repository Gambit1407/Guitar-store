import { useContext } from 'react';
import Card from './Card/Card';
import './Cart.css';
import { Context } from '../../context';


const Cart = (props) => {
    const { state } = useContext(Context);
    const { cart, finalPrice } = state;
    
    return (
        <div className='container-cart'>
            <div className='cart-title'>Корзина</div>
            <div className='text-products'>Товары в корзине: </div>
            <div className='products'> 
                {
                    cart.map((product, key) => (
                        <Card 
                            key={key}
                            imgClass={product.img}
                            count={product.count}
                            price={product.price}
                            id={product.id}
                        />  
                    ))
                }
            </div>
            <div>
                <p>{`Итого: ${finalPrice}`}</p>
            </div>
        </div>
    );
};

export default Cart;