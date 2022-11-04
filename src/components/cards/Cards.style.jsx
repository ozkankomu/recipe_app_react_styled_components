import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

export const MainContainer = styled(Flex)`
  flex-direction: row;
`;
export const Card = styled(Flex)`
  flex-direction: column;
  height: 23rem;
  width: 23rem;
  background: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 0.5rem;
  border-radius: 30px;
  margin: 0.7rem;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: none;
    transform: scale(1.05);
    transition: all 0.2s ease-in;
  }
`;

export const Image = styled.img`
  height: 13rem;
  border-radius: 10px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.mainColor};
  padding: 0.7rem;
  outline: none;
  border: none;
  margin: 0.5rem;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;
