import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              car-notes
            </Link>
          </div>
          <div>
            <Link to="/cart">Cart</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          {/* <Route path="/product/:id" component={ProductScreen}></Route> */}
          {/* <Route path="/cart/:id?" component={CartScreen}></Route> */}
        </main>
        <footer className="row center">All rigths reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
