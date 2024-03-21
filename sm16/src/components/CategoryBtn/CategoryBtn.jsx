import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function BasicExample() {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Все</Button>
      <Button variant="secondary">Популярные</Button>
      <Button variant="secondary">Дорогие</Button>
      <Button variant="secondary">Дешевые</Button>
    </ButtonGroup>
  );
}

export default BasicExample;