import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss'; // Asegúrate de que el path es correcto

function Item() {
  return (
    <Card className="item-card">
      <Card.Body>
        <div className="item-content">
          <Card.Title className="item-title">Realizar Proyecto</Card.Title>
          <Card.Subtitle className="item-subtitle mb-2">
            Descripción
          </Card.Subtitle>
          <Card.Text>
            Elaborar Proyecto del Curso de Desarrollo de Aplicaciones Web.
          </Card.Text>
        </div>
        <Button variant="info" className="item-button">Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
