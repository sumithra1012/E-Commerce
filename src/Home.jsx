import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to MithraShop</h1>
        <p>Your one-stop shop for amazing products!</p>
        <Link to="/products">
          <button className="shop-btn">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;