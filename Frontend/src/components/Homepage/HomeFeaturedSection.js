import { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../ExploreLibrary.css";
import { Link } from 'react-router-dom';

function ExploreLibrary() {
  const [homes, setHomes] = useState([]);

  async function getHomes() {
    try {
      let response = await axios.get("http://localhost:3636/homes/");
      const homes = response.data;
      const randomHomes = [];
      const totalHomes = homes.length;
      
      while (randomHomes.length < 4) {
        const randomIndex = Math.floor(Math.random() * totalHomes);
        const randomHome = homes[randomIndex];
        
        if (!randomHomes.includes(randomHome)) {
          randomHomes.push(randomHome);
        }
      }
  
      setHomes(randomHomes);
    } catch (error) {
      console.log('Error fetching homes', error);
    }
  }
  

  useEffect(()=>{
    getHomes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return ( 
    <div>
      <Row xs={1} md={5} className="g-1 mt-4 explore-card-row "> 
        {homes.map(home => (
          <Col key={home._id} className="mb-4">
          <Link to={`/homes/${home._id}`} className="explore-link"> 
            <Card className="explore-card mt-2">
              <Card.Img variant="top" src={home.image} alt="image" className="explore-card-img" />
              <Card.Body className="explore-card-body">
                <Card.Title className="explore-card-title">{home.title}</Card.Title>
                <Card.Text className="explore-card-text">{home.city}</Card.Text>
                <Card.Text className="explore-card-text">{home.address}</Card.Text>
                <Card.Text className="explore-card-text">{home.text}</Card.Text>
                <Card.Text className="explore-card-text">{home.price}</Card.Text>
                <button className="explore-button">View Details</button>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        ))}
      </Row>
    </div>
  );
}

export default ExploreLibrary;