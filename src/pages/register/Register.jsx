import React, { useState } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
  Message,
} from "./Register.style";
import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";
const Register = (e) => {
  const [userInfo, setUserInfo] = useState("aa");
  const handleUsername = (e) => {
    setUserInfo(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate("/");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<Ozkan/>"} Recipe </Header>
        <Message>(Please enter admin as username.)</Message>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            placeholder="Enter username"
            required
            type="text"
            onChange={handleUsername}
          />
          <StyledInput placeholder="Enter password" type="password" />
          <StyledButton type="submit">Register</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Register;
