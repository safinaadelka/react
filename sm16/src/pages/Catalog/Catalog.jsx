import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Category from '../../components/CategoryBtn/CategoryBtn'
import SelectComponent from '../../components/SelectComponent/SelectComponent';
import { useState } from 'react';
import Modalka from '../../components/Modalka/Modalka';
import { Link, useParams } from 'react-router-dom'

function CardExample() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (

    <Container>
    <br /><h1>Каталог</h1><br />

    {/* Категории */}
    <Category/> <br /><br />

    {/* Сортировка */}
    <SelectComponent/>

      <Row>
        <Col xs>
            <br />
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../../../public/img/img1.jpg" />
                <Card.Body>
                <Card.Title>Карточка 1</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary" onClick={handleShow} >В корзину</Button>
                <Link to="/tovar"></Link>

                </Card.Body>
            </Card>
            <br />
        </Col>
        <Modal show={show}>
            <Modalka setShow={setShow} show={show}/>
        </Modal>
        <Col xs>
            <br />
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../../../public/img/img1.jpg" />
                <Card.Body>
                <Card.Title>Карточка 2</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Подробнее</Button>
                </Card.Body>
            </Card>
            <br />
        </Col>
        <Col xs>
            <br />
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../../../public/img/img1.jpg" />
                <Card.Body>
                <Card.Title>Карточка 3</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Подробнее</Button>
                </Card.Body>
            </Card>
            <br />
        </Col>
        <Col xs>
            <br />
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../../../public/img/img1.jpg" />
                <Card.Body>
                <Card.Title>Карточка 4</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Подробнее</Button>
                </Card.Body>
            </Card>
            <br />
        </Col>
        <Col xs>
            <br />
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../../../public/img/img1.jpg" />
                <Card.Body>
                <Card.Title>Карточка 5</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Подробнее</Button>
                </Card.Body>
            </Card>
            <br /> 
        </Col>
      </Row>
    </Container>

    
    
  );
}

export default CardExample;