import { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ExploreLibrary() {
  const [homes, setHomes] = useState([]);

  async function getHomes() {
    try {
      let response = await axios.get("http://localhost:3636/homes/")
      console.log(response)
      setHomes(response.data)
      console.log(homes)
    } catch (error) {
      console.log('Error fetching homes', error)
    }
  }

  useEffect(()=>{
    getHomes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return ( 
    <div>
      <Row xs={1} md={4} className="g-4">
      {homes.map(home =>{
        return (
          <Col key={home._id} >
            <Card>
              <Card.Body>
              <div>
                <Card.Img variant="top" src={home.image} alt="image" />
              </div>
                <Card.Title>{home.title}</Card.Title>
                <Card.Text>{home.city}</Card.Text>
                <Card.Text>{home.address}</Card.Text>
                <Card.Text>{home.text}</Card.Text>
                <Card.Text>{home.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )
      })}     
    </Row>
    </div>
   );
}

export default ExploreLibrary;