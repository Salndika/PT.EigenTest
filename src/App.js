import "./App.css";
import Navbarapp from "@components-navbar";
import Task1 from "@components-task1";
import Task2 from "@components-task2";
import Task3 from "@components-task3";
import Task4 from "@components-task4";
import { Card, CardBody, Row, Col, Container, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <Navbarapp />
      <Container>
        <Col>
          <Row className="py-3">
            <div className="py-1 titlebody">PT EIGEN TRI MATHEMA</div>
            <Col sm={6}>
              <Card
                style={{
                  Maxwidth: "20rem",
                  height: "auto",
                  borderRadius: 8,
                  backgroundColor: "lightyellow",
                }}
              >
                <div
                  className="py-2 bodycard1"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  Task 1
                </div>
                <Label
                  style={{ display: "flex", justifyContent: "center" }}
                  className="bodycard1"
                >
                  Huruf acak dengan hasil EIGEN1
                </Label>
                <CardBody>
                  <Task1 />
                </CardBody>
              </Card>
            </Col>

            <Col sm={6}>
              <Card
                style={{
                  Maxwidth: "20rem",
                  height: "auto",
                  borderRadius: 8,
                  backgroundColor: "lightyellow",
                }}
              >
                <div
                  className="py-2 bodycard1"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  Task 2
                </div>
                <Label
                  style={{ display: "flex", justifyContent: "center" }}
                  className="bodycard1"
                >
                  Output kalimat dengan kata terpanjang
                </Label>
                <CardBody>
                  <Task2 />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="py-3">
            <Col sm={6}>
              <Card
                style={{
                  Maxwidth: "20rem",
                  height: "auto",
                  borderRadius: 8,
                  backgroundColor: "lightyellow",
                }}
              >
                <div
                  className="py-2 bodycard1"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  Task 3
                </div>
                <Label
                  style={{ display: "flex", justifyContent: "center" }}
                  className="bodycard1"
                >
                  Menentukan berapa kali QUERRY terdapat didalam array INPUT
                </Label>
                <CardBody>
                  <Task3 />
                </CardBody>
              </Card>
            </Col>

            <Col sm={6}>
              <Card
                style={{
                  Maxwidth: "20rem",
                  height: "auto",
                  borderRadius: 8,
                  backgroundColor: "lightyellow",
                }}
              >
                <div
                  className="py-2 bodycard1"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  Task 4
                </div>
                <Label
                  style={{ display: "flex", justifyContent: "center" }}
                  className="bodycard1"
                >
                  hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN
                </Label>
                <CardBody>
                  <Task4 />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;
