import React from "react";
import { Form2, Button } from "../../styles/Form";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [select, setSelect] = useState({ food: "", category: "" });
  const { food, category } = select;
  const [data, setData] = useState("second");

  const id = "6420fd09";
  const number = "76f1e09fadeca30bd4595db4e8cdc3c7";
  const url = `https://api.edamam.com/search?q=${food}&app_id=${id}&app_key=${number}&mealType=${category}`;

  const receipe = async (e) => {
    e.preventDefault();
    const result = await axios(url);
    setData(result);
    console.log(data);
  };

  return (
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
          <option selected disabled>
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
  );
};

export default Home;
