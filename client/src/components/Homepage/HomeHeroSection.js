import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Carousel, Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import axios from "axios"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../ExploreLibrary.css"
import { Link } from 'react-router-dom';

function HomeHeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3636/homes/search/${encodeURIComponent(searchQuery)}`);
      const data = response.data;
      console.log({data})
      setSearchResults(data);
    } catch (error) {
      console.error("Error occurred during search:", error);
    }
  };
  
  return ( 
    <div className="hero-section">
      <Carousel>
      <Carousel.Item>
          <div className="carousel-image">
            <img src="https://images.unsplash.com/photo-1539298781177-895e382e795c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHdpbnRlciUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" className="d-block w-100" alt="house1" />
            <div className="carousel-content">
              <h1>Welcome to Home Sweet Home: Connect and Explore with Home Exchanges</h1>
            </div>
          </div>
          <Carousel.Caption className="carousel-search">
            <Container className="d-flex justify-content-center align-items-center">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="info" onClick={handleSearch}>
                Search
              </Button>
          </InputGroup>
            </Container>
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
          <div className="carousel-image">
            <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="house1" />
            <div className="carousel-content">
              <h1>Welcome to Home Sweet Home: Connect and Explore with Home Exchanges</h1>
            </div>
          </div>
          <Carousel.Caption className="carousel-search">
            <Container className="d-flex justify-content-center align-items-center">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="info" onClick={handleSearch}>
                Search
              </Button>
          </InputGroup>
            </Container>
          </Carousel.Caption>
      </Carousel.Item>
   
      <Carousel.Item>
          <div className="carousel-image">
            <img src="https://images.unsplash.com/photo-1576109324778-3ec50ebdf7db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGZsb3dlciUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" className="d-block w-100" alt="house1" />
            <div className="carousel-content">
              <h1>Welcome to Home Sweet Home: Connect and Explore with Home Exchanges</h1>
            </div>
          </div>
          <Carousel.Caption className="carousel-search">
            <Container className="d-flex justify-content-center align-items-center">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="info" onClick={handleSearch}>
                Search
              </Button>
          </InputGroup>
            </Container>
          </Carousel.Caption>
      </Carousel.Item>
   
      <Carousel.Item>
          <div className="carousel-image">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80" className="d-block w-100" alt="house1" />
            <div className="carousel-content">
              <h1>Welcome to Home Sweet Home: Connect and Explore with Home Exchanges</h1>
            </div>
          </div>
          <Carousel.Caption className="carousel-search">
            <Container className="d-flex justify-content-center align-items-center">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="info" onClick={handleSearch}>
                Search
              </Button>
          </InputGroup>
            </Container>
          </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

      <br />
      <br />

      <div>
        <h3>List your home. Search for a home swap holiday</h3>
      <p>Sign up for home exchange. Add information and nice photos of your exchange home and local area to appeal to other members. Add some details about you and your family.</p>
      <p>Use the Search Homes page to find homes that match your travel plans and exchange partners who share your interests, by using our advanced search criteria</p>
      </div>
      
        <Row xs={1} md={3} className="g-1 mt-2 explore-card-row "> 
        {searchResults.map(result => (
          <Col key={result._id} className="mb-4 ">
            <Link to={`/homes/${result._id}`} className="explore-link"> 
            <Card className="explore-card mt-2 home-card">
              <Card.Img variant="top" src={result.image} alt="image" className="explore-card-img home-img" />
              <Card.Body className="explore-card-body">
                <Card.Title className="explore-card-title">{result.title}</Card.Title>
                <Card.Text className="explore-card-text">{result.city}</Card.Text>
                <Card.Text className="explore-card-text">{result.address}</Card.Text>
                <Card.Text className="explore-card-text">{result.text}</Card.Text>
                <Card.Text className="explore-card-text">{result.price}</Card.Text>
                <button className="explore-button">View Details</button>
              </Card.Body>
            </Card>
          </Link>
          </Col>
        ))}
      </Row>
       
   

      <br /><br /><hr />
    </div>
   );
}

export default HomeHeroSection;