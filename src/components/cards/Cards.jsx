import React from "react";
import { Button, Card, Header, Image, MainContainer } from "./Cards.style";
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from "react-router";

const Cards = ({ recipes }) => {
  const navigate = useNavigate();
  console.log(recipes);

  return (
    <MainContainer wrap="wrap">
      {recipes.map(({ recipe }, index) => {
        const {} = recipe;
        return (
          <Card key={index}>
            <Header>{recipe.label}</Header>
            <Image src={recipe.image || defaultImage} />
            <Button
              onClick={() =>
                navigate("detail", { state: recipe, replace: false })
              }
            >
              View More
            </Button>
          </Card>
        );
      })}
    </MainContainer>
  );
};

export default Cards;
