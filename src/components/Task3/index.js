import React from "react";
import { Container, Row, Col, Input } from "reactstrap";

const querry = ["xc", "dz", "bbb", "dz"];

const Task3 = () => {

  function foo(array) {
    let a = [],
      b = [],
      arr = [...array], // clone array so we don't change the original when using .sort()
      prev;

    arr.sort();
    for (let element of arr) {
      if (element !== prev) {
        a.push(element);
        b.push(1);
      } else ++b[b.length - 1];
      prev = element;
    }

    return [a, b];
  }

  const result = foo(querry);

  return (
    <Container>
      <Row className='py-2'>
        <Col sm={6}>
          <div>
            <div>input </div>
            <Input type="string" value={querry} />
          </div>
          <div>
            <div>Querry </div>
            <Input type="string" value={["bbb", "dz", "xc"]} />
          </div>
        </Col>
        <Col sm={6}>
          <div>Result</div>
          <Input type="string" value={result[1]}  />
          <div
            className="py-2"
            style={{ display: "flex", justifyContent: "center" }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Task3;
