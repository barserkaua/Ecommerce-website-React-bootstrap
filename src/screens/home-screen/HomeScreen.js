import { useState, useEffect } from "react";
import {Row, Col} from 'react-bootstrap';
import Product from "../../components/product/Product";
import axios from "axios";

function HomeScreen() {

    const [products, setProducts] = useState([]);

    // useEffect gets loaded every single time or gets triggered every single time,
    // the component loads or, when a state attribute or one of the state values gets updated
    useEffect(() => {

        // we wrap this inside of a function
        // we made sure, that function was async
        async function fetchProducts() {
            // and then we used a wait to return that promise
            // we destructure that data and then we reset the state
            const {data} = await axios.get('/api/products/')
            setProducts(data);
        }

        fetchProducts()

    }, [])

    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen;