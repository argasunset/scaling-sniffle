import { Col, Container, Row, Button } from "react-bootstrap"

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">YA CUMA DISINI</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark" id="trending">Lihat Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro