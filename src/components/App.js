import React from "react";
import Header from "./Header";
import CoffeeControl from "./CoffeeControl";
import { Container, Row, Col } from "react-bootstrap";

function App(){
  return ( 
    <React.Fragment>
      <Container fluid>
        <Header />
        <CoffeeControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
