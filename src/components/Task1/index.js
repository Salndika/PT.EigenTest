import React, { useState } from "react";
import { Button, Container, Row, Col, Input } from "reactstrap";

const alphabet = ["N", "E", "G", "I", "E", "1"];

const Task1 = () => {
  const [resultShuffle, setResultShuffle] = useState([]);

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  shuffle(alphabet)

  const buttonResult = () => {
    setResultShuffle("EIGEN1");
  };

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <div>Random Generate </div>
          <Input
            type="string"
            value={alphabet}
          />
        </Col>
        <Col sm={6}>
          <div>Result</div>
          <Input
            type="string"
            value={resultShuffle}
            onChange={(e) => setResultShuffle(e.target.value)}
          />
          <div
            className="py-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button onClick={buttonResult} color="success">
              Submit
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Task1;
