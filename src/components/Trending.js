import { Card, Container, Row, Col, Image} from "react-bootstrap"
import napoleonImage from "../assets/images/trending/napoleon.jpg"
import  bomImage from "../assets/images/trending/bom-di-jkt.jpg"
import agalImage from "../assets/images/trending/agal-laen.jpg"
import AquamanImage from "../assets/images/trending/Aquaman-and-the-Lost-Kingdom.jpg"
import siksaImage from "../assets/images/trending/siksa-neraka.jpg"
import vinaImage from "../assets/images/trending/vina-sebelum-7-hari.webp"

const Trending = () => {
  return(
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
      <Row>
        <Col md={4} className="movieWrapper" id="trending">
        <Card className="movieImage">
      <Image src={napoleonImage} alt="Napoleon Movies" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">NAPOLEON</Card.Title>
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
      <Image src={bomImage} alt="Napoleon Movies" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">13 Bom Di Jakarta</Card.Title>
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
      <Image src={agalImage} alt="Napoleon Movies" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Aga Lain</Card.Title>
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
      <Image src={AquamanImage} alt="Napoleon Movies" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Aquaman And The Lost Kingdom</Card.Title>
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
      <Image src={siksaImage} alt="Napoleon Movies" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Siksa Neraka</Card.Title>
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
      <Image src={vinaImage} alt="Napoleon Movies" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Vina Sebelum 7 Hari</Card.Title>
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

export default Trending