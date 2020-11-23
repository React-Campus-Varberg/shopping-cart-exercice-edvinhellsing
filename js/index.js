import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Header from '../components/header';
import Product from '../components/product';

ReactDOM.render(
   <Header />, document.getElementById('header')
);

ReactDOM.render(
   <App />, document.getElementById('root')
);

/* class MyComponent extends React.Component {
   constructor(props) {
      super(props);
      console.log(props);

      this.state = {
         test: 'los world!',
         title: 'bye'
      }
   }

   render() {
      return (
      <h1>Hello {this.state.test}{this.state.title}</h1>
      )
   }
}

ReactDOM.render(
   <MyComponent />, document.getElementById('root')
); */