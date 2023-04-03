import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ProductComponent = () => {
    const products = useSelector((state) => state.allProduct.products)
    console.log(products)
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
          <div key={id} className='ml-2 custom-card'>
           <Link className='text-decoration-none' to={`/product/${id}`}>
            <Card style={{ width: '18rem' }} className='ui link card'>
              <Card.Img variant="top" src= {image} className='image custom-image' />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className='meta'>
                  {category}
                </Card.Text>
                <Link className='btn meta' variant='primary' to={`/product/${id}`}>${price}</Link>
              </Card.Body>
            </Card>
           </Link>
          </div>
        
        );
      });

  return (
   <>{renderList}</> 
  )
}

export default ProductComponent