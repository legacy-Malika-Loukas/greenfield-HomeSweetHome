import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import "./ExploreLibrary.css"

function HomeDetails() {
  const { id } = useParams();
  const [home, setHome] = useState([]);

  useEffect(() => {
    async function fetchHomeDetails() {
      try {
        const response = await axios.get(`http://localhost:3636/homes/home/${id}`);
        setHome(response.data);
      } catch (error) {
        console.log('Error fetching home details', error);
      }
    }

    fetchHomeDetails();
  }, [id]);

  return ( 
    <div >
      <h2>Here is more information about the home you chose:</h2>
      <div className="details">
      <br /><br />

      <Card className="explore-card mt-2"> 
        <Card.Img variant="top" src={home.image} alt="image" className="explore-card-img" />
        <Card.Body className="explore-card-body">
          <Card.Title className="explore-card-title">{home.title}</Card.Title>
          <Card.Text className="explore-card-text">{home.city}</Card.Text>
          <Card.Text className="explore-card-text">{home.address}</Card.Text>
          <Card.Text className="explore-card-text">{home.text}</Card.Text>
          <Card.Text className="explore-card-text">{home.price}</Card.Text>
          <button className="explore-button">Contact Owner</button>
        </Card.Body>
      </Card>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.0698156778185!2d23.732681415323448!3d37.97549997972343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3e92480435%3A0x68ba1057cb0d560e!2sPlateia%20Syntagmatos%2C%20Athina!5e0!3m2!1sen!2sgr!4v1689647209880!5m2!1sen!2sgr"
          title="Google Maps"
          width="400"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
    </div>
   );
}

export default HomeDetails;