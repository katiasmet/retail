import React, {PropTypes} from 'react';
import {basename} from '../globals';

const Products = ({product, productsLength, clickHandler}) =>  {

  return (
    <section className='products'>

      <div className='product-mood'>

        <figure>
          <img src={`${basename}/assets/img/${product.image}`} alt={product.product_type} />
        </figure>

        <ul className='product-nav'>
          {
            [...Array(productsLength)].map((x, i) => {
              return <li key={i} className='pointer' onClick={() => clickHandler(i)}></li>;
            })
          }
        </ul>

      </div>

      <div className='product-details'>
        <h1>{product.product_type}</h1>
        <h2>{product.detail_title}</h2>

        <p>{`"${product.info}"`}</p>
      </div>

    </section>
  );

};

Products.propTypes = {
  product: PropTypes.object,
  productsLength: PropTypes.number,
  clickHandler: PropTypes.func
};

export default Products;
