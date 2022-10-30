import React, { useEffect } from "react";
import { Form2, Button } from "../../styles/Form";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [select, setSelect] = useState({ food: "", category: "" });
  const { food, category } = select;
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("DATA")) || []
  );
  const [datas, setDatas] = useState("");

  const id = "6420fd09";
  const number = "76f1e09fadeca30bd4595db4e8cdc3c7";
  const url = `https://api.edamam.com/search?q=${food}&app_id=${id}&app_key=${number}&mealType=${category}`;

  const receipe = async (e) => {
    e.preventDefault();
    const { data } = await axios(url);
    localStorage.setItem("DATA", JSON.stringify(data.hits));
    setData(data.hits);
    console.log(data);
  };

  return (
    <div className="my-5 py-4 text-center">
      <Form2>
        <h1>Please Select Receipe</h1>
        <form onSubmit={(e) => receipe(e)}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="food"
              aria-describedby="emailHelp"
              placeholder="Please Enter Receipe (Not Required ...!)"
              onChange={(e) => setSelect({ ...select, food: e.target.value })}
            />
          </div>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setSelect({ ...select, category: e.target.value })}
          >
            <option defaultValue={" Please Slect the Recipe Category"} disabled>
              Please Slect the Recipe Category
            </option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Teatime">Teatime</option>
          </select>
          <Button type="submit" className="btn btn-primary">
            Search
          </Button>
        </form>
      </Form2>
      <div className="row justify-content-center align-items-center ">
        {data
          ? data.map((item, index) => {
              const { recipe } = item;
              return (
                <div
                  key={index}
                  className="card col-sm-6 col-md-4 col-lg-3 col-xl-3 m-2 p-2 rounded-4 text-center"
                  style={{
                    width: "18rem",
                    height: "29rem",
                    backgroundColor: "#0f0360b1",
                  }}
                >
                  <img
                    src={recipe?.image}
                    className="card-img-top rounded-4"
                    alt="image"
                  />
                  <div
                    className="card-body bg-light rounded-4 mt-1"
                    // style={{ height: "9rem" }}
                  >
                    <h6 className="card-title">{recipe?.label}</h6>
                    <p className="card-text">
                      {recipe?.cuisineType[0]}, {recipe?.mealType[0]}
                    </p>
                    <Link
                      to="/details"
                      state={recipe}
                      className="btn btn-primary w-50"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Home;
