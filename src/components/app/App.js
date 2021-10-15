import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "../header/Header";
import Footer from "../footer/Footer";

import HomeScreen from "../../screens/home-screen/HomeScreen";
import ProductScreen from "../../screens/product-screen/ProductScreen";

function App() {
  return (
    <Router>
        <Header/>
            <main className="py-3">
                <Container>
                    <Route path="/" component={HomeScreen} exact/>
                    <Route path="/product/:id" component={ProductScreen}/>
                </Container>
            </main>
        <Footer/>
    </Router>
  );
}

export default App;
