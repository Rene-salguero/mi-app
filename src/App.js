
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Componentes/Item/Item.js';
import Formulario from './Componentes/Formulario/Formulario.js'
import Menu from './Componentes/Menu/Menu.js';
import { Col, Container, Row } from 'react-bootstrap';



const  App =() =>{
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
      <Row>
      <Col><Formulario></Formulario></Col>
      <Col>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      </Col>
      </Row>
      </Container>
    
      
     
    </div>
  );
}

export default App;
