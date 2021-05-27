import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          src='https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png'
          alt=''
          className='checkout_add'
        />
        <div>
          <h2 className='checkout_title'>Your Shopping basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

          {/* Checkoutproduct */}
          {/* Checkoutproduct */}
          {/* Checkoutproduct */}
          {/* Checkoutproduct */}
        </div>
      </div>

      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
