import React from 'react';

import Cart from '../components/cart';
import Product from '../components/product';

function App() {
   return (
      <article>
         <section>
            <h1>ML introduction books</h1>
         </section>
         <section className="products-section">
            <Product 
               bookTitle="Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow"
               bookAuthor="Aurélien Géron"
               bookDesc="Deep Learning with Python introduces the field of deep learning using the Python language and the powerful Keras library. Written by Keras creator and Google AI researcher François Chollet, this book builds your understanding through intuitive explanations and practical examples."
            />
            <Product 
               bookTitle="Deep Learning with Python"
               bookAuthor="François Chollet"
               bookDesc="Deep Learning with Python introduces the field of deep learning using the Python language and the powerful Keras library. Written by Keras creator and Google AI researcher François Chollet, this book builds your understanding through intuitive explanations and practical examples."
            />
            <Product 
               bookTitle="Machine Learning Yearning"
               bookAuthor="Andrew Ng"
               bookDesc="AI is transforming numerous industries. Machine Learning Yearning, an ebook from Andrew Ng, teaches you how to structure Machine Learning projects. This book is focused not on teaching you ML algorithms, but on how to make ML algorithms work."
            />
            <Product 
               bookTitle="Deep Learning"
               bookAuthor="Ian Goodfellow, Yoshua Bengio, Aaron Courville"
               bookDesc="An introduction to a broad range of topics in deep learning, covering mathematical and conceptual background, deep learning techniques used in industry, and research perspectives."
            />
         </section>
      </article>
    );
}

export default App;