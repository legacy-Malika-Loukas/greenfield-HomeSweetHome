import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CreateHome from "./CreateHome";
function UserPage() {
  const navigate = useNavigate();
  const [homes, setHomes] = useState([]);
  const [user, setUser] = useState(null);

  function getMyHomes(userId) {
    
    axios.get("http://localhost:3636/homes/" + userId).then(({ data }) => {
      console.log(data);
      setHomes(data);
    });
  }

  function handleDelete(id) {
    axios
      .delete(`http://localhost:3636/homes/delete/${id}`)
      .then((response) => {
        console.log("Home deleted successfully:", response.data);
        // After deleting the home, fetch the updated list of homes
        getMyHomes(user._id);
      })
      .catch((error) => {
        console.error("Error while deleting home:", error);
      });
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .post("http://localhost:3636/user/verify", {
          token: localStorage.getItem("token"),
        })
        .then(({ data }) => {
          console.log(data);
          if (data._id) {
            setUser(data);
            getMyHomes(data._id);
          } else {
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("Error while verifying token:", error);
          navigate("/login");
        });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      {homes.length > 0 ? (
        <Row xs={1} md={4} className="g-4">
          {homes.map((home) => (
            <Col key={home._id}>
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

                  {/* Add the Delete button */}
                  <Button variant="danger" onClick={() => handleDelete(home._id)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div>No homes found.</div>
        
      )}
<button onClick={() => navigate("/create")}>Add new house</button>
   </div>
  );
}

export default UserPage;
