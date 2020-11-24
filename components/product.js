import React from 'react';

function Product(props) {
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
           <div className = "add-to-cart-btn">
               {props.addToCartBtn}
           </div>
       </section>
   );
}

export default Product;