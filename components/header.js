import React from 'react';

import imgUrl from '../img/sherlock-holmes-147255_640.png';
import Cart from './cart';

function Header() {
   return (
      <div className = "header">
         <img src = {imgUrl} className = "logo" alt = 'Logo' />
         <li><a href = "/html/cart.html"><i className = "fa fa-shopping-cart" aria-hidden = "true"></i></a></li>
      </div>
   );
}

export default Header;