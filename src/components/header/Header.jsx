import React from "react";
import "./Header.style";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./Header.style";

const Header = ({ setQuery, setSelectedMeal, mealType, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>

      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          required
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <Button type="submit">Search</Button>
        <Select
          name="mealType"
          id="mealtype"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((meal, index) => (
            <option key={index} value="meal">
              {meal}
            </option>
          ))}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
