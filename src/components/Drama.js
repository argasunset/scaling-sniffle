import { Card, Container, Row, Col, Image} from "react-bootstrap"
import dignitateImage from "../assets/images/drama/dignitate.jpg"
import dilanImage from "../assets/images/drama/dilan.jpg"
import kcImage from "../assets/images/drama/kc.jpg"
import miracleImage from "../assets/images/drama/miracle.jpg"
import terlalutampanImage from "../assets/images/drama/terlalutampan.jpg"
import vanderwijckImage from "../assets/images/drama/vanderwijck.jpg"

const Drama = () => {
  return(
    <div>
      <Container>
        <br />
        <h1 className="text-white">DRAMA INDONESIA MOVIES</h1>
        <br />
      <Row>
        <Col md={4} className="movieWrapper" id="drama">
        <Card className="movieImage">
      <Image src={dignitateImage} alt="Napoleon Movies" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">DIGNITATE</Card.Title>
        <Card.Text className="text-left">
          This is a wider card with
        </Card.Text>
        <Card.Text className="text-left">
          Last updated 3 mins ago</Card.Text>
          </div>
      </div>
    </Card>
        </Col>
        <Col md={4} className="movieWrapper">
        <Card className="movieImage">
      <Image src={dilanImage} alt="Napoleon Movies" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">DILAN 1990</Card.Title>
        <Card.Text className="text-left">
          This is a wider card with
        </Card.Text>
        <Card.Text className="text-left">
          Last updated 3 mins ago</Card.Text>
          </div>
      </div>
    </Card>
        </Col>
        <Col md={4} className="movieWrapper">
        <Card className="movieImage">
      <Image src={kcImage} alt="Napoleon Movies" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Keluarga Cemara</Card.Title>
        <Card.Text className="text-left">
          This is a wider card with
        </Card.Text>
        <Card.Text className="text-left">
          Last updated 3 mins ago</Card.Text>
          </div>
      </div>
    </Card>
        </Col>
        <Col md={4} className="movieWrapper">
        <Card className="movieImage">
      <Image src={terlalutampanImage} alt="Napoleon Movies" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Terlalu Tampan</Card.Title>
        <Card.Text className="text-left">
          This is a wider card with
        </Card.Text>
        <Card.Text className="text-left">
          Last updated 3 mins ago</Card.Text>
          </div>
      </div>
    </Card>
        </Col>
        <Col md={4} className="movieWrapper">
        <Card className="movieImage">
      <Image src={vanderwijckImage} alt="Napoleon Movies" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Tenggelamnya Kapal VanderWijck</Card.Title>
        <Card.Text className="text-left">
          This is a wider card with
        </Card.Text>
        <Card.Text className="text-left">
          Last updated 3 mins ago</Card.Text>
          </div>
      </div>
    </Card>
        </Col>
        <Col md={4} className="movieWrapper">
        <Card className="movieImage">
      <Image src={miracleImage} alt="Napoleon Movies" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Miracle In Cell No 7</Card.Title>
        <Card.Text className="text-left">
          This is a wider card with
        </Card.Text>
        <Card.Text className="text-left">
          Last updated 3 mins ago</Card.Text>
          </div>
      </div>
    </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Drama