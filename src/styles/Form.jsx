import styled from "styled-components";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
  padding: 3rem;
  background-color: #620505a0;
  text-align: center;
  margin: 10% auto;
  width: 50%;
  height: 450px;
  h1 {
    margin-top: 0;
    color: white;
  }
`;

export default Form;

export const Form2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 80px;
  padding: 3rem;
  background-color: #040a559f;
  text-align: center;
  margin: 1rem auto;
  width: 700px;
  height: 250px;
  h1 {
    margin-top: 0;
    color: #ffffff;
  }
`;

export const Button = styled.button`
  width: 100%;
  font-size: 1.3rem;
  margin-top: 1rem;
`;

export const Contact = styled.button`
  font-size: 1.4rem;
  margin: 0.5rem;
  color: white;
  border: none;
  background-color: #5d0606;
  border-radius: 40%;
  padding: 0.5rem;
  width: 150px;

  & :hover {
    transform: scale(1.1);

    Navlink {
      color: white;
    }
  }
`;

export const Text = styled.div`
  margin: 1rem auto;
  border-radius: 30%;
  padding: 2rem;
  background-color: #ffffff7d;
  width: 900px;
  color: #360303;
  text-shadow: 1px 1px 1px black;
  box-shadow: inset 5px 5px 10px black, 5px 5px 10px black;
`;

export const Footerr = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 1.5rem;
  color: #ffffff;
  box-shadow: inset 5px 5px 30px black, 5px 5px 10px black;
  background-color: #4d024de0;
  padding: 2rem;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  font-size: 2rem;
  color: #ffffff;
`;
