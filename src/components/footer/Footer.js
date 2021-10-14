import {Container, Row, Col} from "react-bootstrap";

function Footer () {
    return (
        <footer className="bg-dark text-white">
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; SunriseMarket</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;