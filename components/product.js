import React from 'react';

function Product(props) {
   console.log(props);

   const handleClick = (event) => {
      console.log(event);
      if(event.onClick == true) {
         console.log('Product added to cart: ', event.target.value);
         props.updateState(event.target.value)
      }
   }

   return (
      <section className = "products">
         <h2 className = "book-title">
            {props.bookTitle}
         </h2>
         <div className = "book-author">
            {props.bookAuthor}
         </div>
         <div className = "book-desc">
            {props.bookDesc}
         </div>
         <button className = "add-to-cart-btn" onClick={handleClick}>{props.cartBtn} Add to cart</button>
      </section>
   );
}

export default Product;