import React from "react";
import Form, { Button } from "../../styles/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const formHandle = (e) => {
    e.preventDefault();
    localStorage.setItem("LOGIN", JSON.stringify(login));
    navigate("home", { state: login });
  };

  return (
    <Form>
      <h1>Welcome to Receipe Web Site</h1>
      <form onSubmit={(e) => formHandle(e)}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            required
            id="username"
            aria-describedby="emailHelp"
            placeholder="Please Enter Your Username"
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            required
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Please enter Your password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
        </div>
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default Login;
