import Form from 'react-bootstrap/Form';

function SelectBasicExample() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Цена по возрастанию</option>
      <option value="1">Цена по убыванию</option>
    </Form.Select>
  );
}

export default SelectBasicExample;