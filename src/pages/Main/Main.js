import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main = () => {
  return (
    <Container>
      <Nav>
        <Button>
          <Link to="/1">first</Link>
        </Button>
        <Button>
          <Link to="/2">second</Link>
        </Button>
      </Nav>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  font-size: 20px;
  margin: 100px;
  padding: 10px;
  border: 1px solid grey;
`;
