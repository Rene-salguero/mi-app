import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss'

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='form-label-bold'>Name</Form.Label>
        <Form.Control type="text"/>
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='form-label-bold'>Description</Form.Label>
        <Form.Control type=""  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='form-label-bold'>Due Date</Form.Label>
        <Form.Control type="date"  />
      </Form.Group>
     
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Formulario;