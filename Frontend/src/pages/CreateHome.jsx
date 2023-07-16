import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateHome() {
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [user, setUser] = useState({
    _id:"",
    email:"",
  });
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    console.log("haha")
    axios
      .post("http://localhost:3636/homes/", {
        image,
        title,
        city,
        address,
        description,
        price,
        userId: user._id,
      })
      .then(data => {
        console.log(data)
        navigate("/profile")
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add Home</h2>
          <div className="mb-2">
            <label htmlFor="">Image</label>
            <input
              type="text"
              placeholder="Enter Image"
              className="form-control"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">City</label>
            <input
              type="text"
              placeholder="Enter City"
              className="form-control"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Enter City"
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Description</label>
            <textarea
              type="text"
              placeholder="Enter Text"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Price</label>
            <input
              type="number"
              placeholder="Enter Price"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button className="btn btn-success" >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateHome;