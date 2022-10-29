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
  width: 700px;
  height: 400px;
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
  margin: 1% auto;
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
