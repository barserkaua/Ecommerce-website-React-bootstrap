import {Container} from "react-bootstrap";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import HomeScreen from "../../screens/home-screen/HomeScreen";

function App() {
  return (
    <div>
        <Header/>
            <main className="py-3">
                <Container>
                    <h1>Hello world</h1>
                    <HomeScreen/>
                </Container>
            </main>
        <Footer/>
    </div>
  );
}

export default App;
