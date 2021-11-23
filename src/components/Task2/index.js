import React, { useState } from "react";
import {Container, Row, Col, Input } from "reactstrap";

const Task2 = () => {
  const [inputSentence, setInputSentence] = useState("");

  function findLongestWord(str) {
    let words = str.split(" ");
    let maxLength = 0;
    let word = null;

    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        word = words[i];
      }
    }
    return (word + ' : ' + maxLength + ' Character' );
  }

  return (
    <Container>
      <Row className='py-4'>
        <Col sm={6} className='py-1'>
          <div>Input Sentence </div>
          <Input
            type="string"
            placeholder="Click to input..."
            onChange={(e) => setInputSentence(e.target.value)}
          />
        </Col>
        <Col sm={6} className='py-1'>
          <div>Result</div>
          <Input
            type="string"
            value={findLongestWord(inputSentence)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Task2;
