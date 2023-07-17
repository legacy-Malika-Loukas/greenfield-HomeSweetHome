import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, ButtonGroup } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate();
  const [homes, setHomes] = useState([]);
  const [user, setUser] = useState(null);

  function getMyHomes(userId) {
    
    axios.get("http://localhost:3636/homes/" + userId).then(({ data }) => {
      // console.log(data);
      setHomes(data);
    });
  }

  function handleDelete(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete this home?")
    if (confirmDelete) {
      axios
      .delete(`http://localhost:3636/homes/${id}`)
      .then((response) => {
        console.log("Home deleted successfully:", response.data);
        // After deleting the home, fetch the updated list of homes
        getMyHomes(user._id);
      })
      .catch((error) => {
        console.error("Error while deleting home:", error);
      });
    }    
  }

  function handleUpdate(id) {
    navigate(`/update/${id}`)
  }

  function handleCreate(id) {
    navigate(`/create/${user._id}`)
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .post("http://localhost:3636/user/verify", {
          token: localStorage.getItem("token"),
        })
        .then(({ data }) => {
          // console.log(data);
          if (data._id) {
            // console.log({data})
            setUser(data);
            getMyHomes(data._id);
          } else {
            navigate("/signup-login");
          }
        })
        .catch((error) => {
          console.error("Error while verifying token:", error);
          navigate("/signup-login");
        });
    } else {
      navigate("/signup-login");
    }
  }, [navigate]);

  return (
    <div className="user-profile-container">
      <div>
        <h2 className="user-profile-heading">Welcome to your account {user?.email}</h2>
        <Button className="add-btn" variant="success" size="lg" onClick={() => handleCreate()}>Add new house</Button>
      </div>

      <br />
      {homes.length > 0 ? (
        <Row xs={1} md={4} className="g-4">
          {homes.map((home) => (
            <Col key={home._id}>
              <Card className="card">
                <div className="card-img-container">
                  <Card.Img variant="top" src={home.image} alt="image" className="card-img" />
                </div>
                <Card.Body className="card-body">
                  <Card.Title className="card-title">{home.title}</Card.Title>
                  <Card.Text className="card-text">{home.city}</Card.Text>
                  <Card.Text className="card-text">{home.address}</Card.Text>
                  <Card.Text className="card-text">{home.text}</Card.Text>
                  <Card.Text className="card-text">{home.price}</Card.Text>

                  <div className="buttons-container">
                    <ButtonGroup size="sm" className="mb-2">
                      <Button variant="danger btn-sm delete-button" onClick={() => handleDelete(home._id)}>
                        <i className="bi bi-trash" /> Delete
                      </Button>
                      <Button variant="primary btn-sm update-button" onClick={() => handleUpdate(home._id)}>
                        <i className="bi bi-pencil-square" /> Update
                      </Button>
                    </ButtonGroup>
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="no-homes-message">No homes found.</div>
      )}
    </div>
  );
}

export default UserProfile;
