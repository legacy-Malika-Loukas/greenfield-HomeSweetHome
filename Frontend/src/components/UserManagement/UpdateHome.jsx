import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateHome() {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  function Update(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:3636/homes/${id}`, {
        image,
        title,
        city,
        address,
        description,
        price,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/user-profile");
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3636/homes/${id}`)
      .then((response) => {
        console.log(response.data);
        const { image, title, city, address, description, price } = response.data;
        setImage(image || "");
        setTitle(title || "");
        setCity(city || "");
        setAddress(address || "");
        setDescription(description || "");
        setPrice(price || "");
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Update Home</h2>

          <div className="mb-2">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
              placeholder="Enter Image"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className="mb-2">
          <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter Title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="Enter City"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter Address"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              placeholder="Enter Description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              placeholder="Enter Price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateHome;
