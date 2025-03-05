import React from "react";
import { 
    Container,
     Row,
      Col,
      Button,
      Alert
     } from "react-bootstrap";

const el = (
  <Container>
    <Alert variant="danger">
    you have successfully created
    </Alert>
    <Row xs={1} md={2} lg={4}>
      <Col>hello <Button variant="success"> success </Button>
        </Col>
      <Col >hello <Button variant="danger">Delete</Button>
      </Col>
      <Col >hello</Col>
      <Col >hello</Col>
    </Row>
  </Container>
);

export default el;
