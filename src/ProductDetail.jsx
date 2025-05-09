import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import './ProductDetail.css';
import { CartContext } from './CardContent';
import Products from './ProductsData';




function ProductDetail() {
  const { id } = useParams();
  console.log(id);
  const { addToCart } = useContext(CartContext);
  const product = Products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name}/>
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p><strong>Price:</strong> ₹ {product.price}</p>
        <p><strong>Description:</strong>{product.description}</p>{/*actual description*/}
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;