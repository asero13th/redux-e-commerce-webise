import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path="/" exact Component={ProductListing} />
          <Route path="/product/:productId" Component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
