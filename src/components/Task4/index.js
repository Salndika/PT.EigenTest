import React from "react";
import { Container, Row, Col, Input } from "reactstrap";

const Task3 = () => {
  
    function SumDiagonals(matrix){
        var n = matrix.length;
        var diag1 = 0;
        var diag2 = 0;
        for(var i=0; i<n; i++){
            for(var j=0; j<n; j++){
                // an element from the main diagonal
                if(i === j) { 
                    diag1 += matrix[i][j];
                }
                // an element from the counterdiagonal
                if(i + j === n - 1){
                    diag2 += matrix[i][j];
                }
            }
        }  
        return (diag1 +'+'+ diag2 +'='+ Math.abs(diag1 + diag2));
    }

    function SubDiagonals(matrix){
        var n = matrix.length;
        var diag1 = 0;
        var diag2 = 0;
        for(var i=0; i<n; i++){
            for(var j=0; j<n; j++){
                // an element from the main diagonal
                if(i === j) { 
                    diag1 += matrix[i][j];
                }
                // an element from the counterdiagonal
                if(i + j === n - 1){
                    diag2 += matrix[i][j];
                }
            }
        }  
        return (diag1 +'-'+ diag2 +'='+ Math.abs(diag1 - diag2));
    }

    let MatrixTest = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
    console.log(SumDiagonals(MatrixTest))
    console.log(SubDiagonals(MatrixTest))

  return (
    <Container>
      <Row className="py-2">
      <div className='poolpoint py-3' style={{display:'flex', justifyContent:'center'}}>Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]</div>
        <Col sm={6}>
          <div>Matrix Diagonal Addition </div>
          <Input type="string" value={SumDiagonals(MatrixTest)} />
        </Col>
        <Col sm={6}>
          <div>Matrix Diagonal Substraction</div>
          <Input type="string" value={SubDiagonals(MatrixTest)} />
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
