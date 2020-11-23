import React from 'react';

function Product(props) {
   return (
       <section className="products">
           <div className="book-title">
               {props.bookTitle}
           </div>
           <div className="book-author">
               {props.bookAuthor}
           </div>
           <div className="book-desc">
               {props.bookDesc}
           </div>
           <div className="add-to-cart-btn">
               {props.addToCartBtn}
           </div>
       </section>
   );
}

export default Product;